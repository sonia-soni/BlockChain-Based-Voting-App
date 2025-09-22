document.addEventListener("DOMContentLoaded", function () {
    const landTypeSelect = document.getElementById("id_type_of_land");
    const landTypeOtherField = document.getElementById("id_land_type_other");

    // Function to toggle the display of the "Other" text field
    function toggleOtherField() {
        if (landTypeSelect && landTypeOtherField) {
            const selectedOption = landTypeSelect.options[landTypeSelect.selectedIndex].text;
            if (selectedOption === "Others") {
                landTypeOtherField.closest('.form-row').style.display = '';  // Show the text field
            } else {
                landTypeOtherField.closest('.form-row').style.display = 'none';  // Hide the text field
            }
        }
    }

    // Run the toggle on page load
    toggleOtherField();

    // Add event listener to re-run the toggle when the dropdown value changes
    landTypeSelect.addEventListener("change", toggleOtherField);
    console.log(django.jQuery);

});
