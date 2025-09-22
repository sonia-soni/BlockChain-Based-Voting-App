document.addEventListener('DOMContentLoaded', function () {
    const activationInput = document.querySelector('#id_ActivationDate');
    const deactivationInput = document.querySelector('#id_DeactivationDate');

    if (activationInput && deactivationInput) {
        activationInput.addEventListener('change', function () {
            const activationDate = new Date(this.value);
            if (activationDate instanceof Date && !isNaN(activationDate)) {
                // Set min date for deactivation to next day
                const nextDay = new Date(activationDate);
                nextDay.setDate(activationDate.getDate() + 1);

                // Format YYYY-MM-DD for input[type=date]
                const formatted = nextDay.toISOString().split('T')[0];
                deactivationInput.setAttribute('min', formatted);
            }
        });
    }
});
