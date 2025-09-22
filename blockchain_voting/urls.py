from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
admin.site.site_header="Block Chain Based Voting System"
admin.site.site_title='Block Chain Admin'
admin.site.index_title='Block Chain Dashboard'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('voting.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
