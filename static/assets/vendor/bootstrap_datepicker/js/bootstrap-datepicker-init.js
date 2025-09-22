$(document).ready(function () {
    function initializeDatepicker() {
        $('.datepicker-input').each(function () {
            if (!$(this).data('datepicker')) { // Prevent duplicate initialization
                let options = {
                    format: 'yyyy-mm-dd',
                    autoclose: true,
                    clearBtn: true,
                    language: 'en',
                    container: $(this).parent(),
                    orientation: "bottom auto"
                };

                // Get today's date
                let today = new Date();

                // Apply different rules based on input ID
                if ($(this).attr('id') === 'DOB') {
                    let eighteenYearsAgo = new Date();
                    eighteenYearsAgo.setFullYear(today.getFullYear() - 21);
                    options.endDate = eighteenYearsAgo; // Restrict DOB to 18 years in the past
                } else if ($(this).attr('id') === 'pvd') {
                    options.startDate = '+1d'; // Allow only future dates for Passport Validity
                }

                $(this).datepicker(options);
            }
        });
    }

    // Initialize datepickers on page load
    initializeDatepicker();

    // Ensure calendar icon toggles only the associated datepicker
    $(document).on('click', '.calendar-icon', function (e) {
        e.preventDefault();
        $(this).closest('.input-group').find('.datepicker-input').datepicker('show');
    });

    // Use MutationObserver to detect dynamically added elements
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                initializeDatepicker(); // Reinitialize datepickers when new elements are added
            }
        });
    });

    // Observe changes in the document body
    observer.observe(document.body, { childList: true, subtree: true });
});

//
//$(document).ready(function () {
//    function initializeDatepicker() {
//        $('.datepicker-input').each(function () {
//            if (!$(this).data('datepicker')) { // Prevent duplicate initialization
//                $(this).datepicker({
//                    format: 'yyyy-mm-dd',
//                    endDate: '+0d',
//                    autoclose: true,
//                    clearBtn: true,
//                    language: 'en',
//                    container: $(this).parent(), // Attach to the parent to avoid misalignment
//                    orientation: "bottom auto" // Ensure it appears below the input field
//                });
//            }
//        });
//    }
//
//    // Initialize datepickers on page load
//    initializeDatepicker();
//
//    // Ensure calendar icon toggles only the associated datepicker
//    $(document).on('click', '.calendar-icon', function (e) {
//        e.preventDefault();
//        $(this).closest('.input-group').find('.datepicker-input').datepicker('show');
//    });
//
//    // Re-initialize datepickers dynamically when new elements are added
//    $(document).on('DOMNodeInserted', function () {
//        initializeDatepicker();
//    });
//});
//


//
//$(document).ready(function() {
//    $('.datepicker-input').datepicker({
//        format: 'yyyy-mm-dd',
//        endDate: '+0d',
//        autoclose: true,
//        clearBtn: true,
//        language: 'en',
//        container: '.input-group', // Keeps the datepicker positioned correctly
//        orientation: "bottom auto" // Ensures it opens below the input field
//    });
//
//    // Ensure calendar icon correctly toggles the datepicker
//    $('.calendar-icon').on('click', function(e) {
//        e.preventDefault();
//        $(this).prev('.datepicker-input').datepicker('show'); // Show datepicker when clicking icon
//    });
//});


//$(document).ready(function() {
//    // Initialize datepicker on the input field
//    $('#dob').datepicker({
//        format: 'yyyy-mm-dd',
//        endDate: '+0d',
//        todayBtn: 'linked',
//        autoclose: true,
//        clearBtn: true,
//        language: 'en',
//        container: 'body',  // Ensures the calendar doesn't get stuck
//        orientation: "bottom auto" // Makes sure the calendar opens below the input
//    });
//
//    // Trigger datepicker when clicking on the calendar icon
//    $('.calendar-icon').on('click', function(e) {
//        e.preventDefault();
//        $('#dob').datepicker('show'); // Show datepicker on icon click
//    });
//});
//
//$(document).ready(function() {
//    // Initialize datepicker for all elements with the 'datepicker-input' class
//    $('.datepicker-input').datepicker({
//        format: 'yyyy-mm-dd',
//        endDate: '+0d',
//        todayBtn: 'linked',
//        language: 'en',
//        autoclose: true,
//        clearBtn: true,
//    });
//
//    // Add click event listener to all calendar icons
//    $('.calendar-icon').on('click', function() {
//        var targetInputId = $(this).data('target');  // Get the corresponding input ID from the 'data-target' attribute
//        $('#' + targetInputId).focus();  // Focus on the input field when the icon is clicked
//    });
//});

//$(document).ready(function() {
//        // Initialize datepicker for elements with the 'datepicker-input' class
//        $('.datepicker-input').datepicker({
//            format: 'dd-MM-yyyy',
//            todayBtn: 'linked',
//            autoclose: true,
//            clearBtn: true,
//            language: 'en'
//        });
//
//        // Add click event listener to the calendar icon
//        $('#calendar-icon').on('click', function() {
//            $('#datepicker-input').focus();  // Focus on the input field when the icon is clicked
//        });
//    });