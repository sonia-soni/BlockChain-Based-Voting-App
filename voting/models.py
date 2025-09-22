from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import hashlib, secrets, time

DIFFICULTY = 4


def compute_has(text: str) -> str:
    return hashlib.sha256(text.encode('utf-8')).hexdigest()


class VoterProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name='User')
    phone = models.CharField(max_length=32, blank=True, null=True, verbose_name='Phone')
    email_verified = models.BooleanField(default=False, verbose_name='Email Verified')
    phone_verified = models.BooleanField(default=False, verbose_name='Phone Verified')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created at')

    def is_verified(self):
        return str(self.phone_verified or self.email_verified)

    class Meta:
        db_table = 'VoterProfile'
        verbose_name = 'Voter Profile'
        verbose_name_plural = 'Voter Profiles'

class Election(models.Model):
    name = models.CharField(max_length=200,blank=False,null=False, verbose_name='Election Name')
    description = models.TextField(blank=False, verbose_name='Election Description')
    start_time = models.DateTimeField(blank=False, null=False, verbose_name='Election Start Time')
    end_time = models.DateTimeField(blank=False, null=False, verbose_name='Election End Time')

    def __str__(self):
        return str(self.name)

    class Meta:
        db_table = 'Election'
        verbose_name = 'Election'
        verbose_name_plural = 'Elections'