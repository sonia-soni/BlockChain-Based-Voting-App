$(document).ready(function() {
    // Initialize datepicker for all elements with the 'datepicker-input' class
    $('.datepicker-input').datepicker({
        format: 'yyyy-mm-dd',
        todayBtn: 'linked',
        autoclose: true,
        clearBtn: true,
        language: 'en'
    });


});

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