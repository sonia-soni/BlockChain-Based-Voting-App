// static/admin/js/cascading_dropdown.js
window.addEventListener("load", function() {
(function($) {
    $(document).ready(function() {
        $('#id_Division').change(function() {
            var divisionCode = $(this).val();
            $.ajax({
                url: '/filter_districts/',
                data: {
                    'division': divisionCode
                },
                success: function(data) {
                    var districtSelect = $('#id_District');
                    districtSelect.empty();
                    districtSelect.append('<option value="">Select District</option>');
                    $.each(data, function(index, item) {
                        districtSelect.append('<option value="' + item.DistrictCode + '">' + item.DistrictName + '</option>');
                    });
                    $('#id_Upazilla').html('<option value="">Select Upazilla</option>');  // Clear Upazilla options
                }
            });
        });

        $('#id_District').change(function() {
            var districtCode = $(this).val();
            $.ajax({
                url: '/filter_upazillas/',
                data: {
                    'district': districtCode
                },
                success: function(data) {
                    var upazillaSelect = $('#id_Upazilla');
                    upazillaSelect.empty();
                    upazillaSelect.append('<option value="">Select Upazilla</option>');
                    $.each(data, function(index, item) {
                        upazillaSelect.append('<option value="' + item.UpazillaCode + '">' + item.UpazillaName + '</option>');
                    });
                }
            });
        });

        $('#id_detail').change(function() {
            const detailId = $(this).val();
            $.ajax({
                url: '/filter_khatians/',
                data: { detail: detailId },
                success: function(data) {
                    const khatianSelect = $('#id_khatian');
                    khatianSelect.empty();
                    khatianSelect.append('<option value="">Select Khatian</option>');
                    $.each(data, function(index, item) {
                        khatianSelect.append('<option value="' + item.id + '">' + item.khatian_cs + '</option>');
                    });
                }
            });
        });
        $('#id_project').change(function () {
                const projectId = $(this).val();

                // AJAX call to fetch details
                $.ajax({
                    url: '/filter_details/',
                    data: { project: projectId },
                    success: function (data) {
                        const detailSelect = $('#id_detail');
                        detailSelect.empty();
                        detailSelect.append('<option value="">Select Detail</option>');
                        $.each(data, function (index, item) {
                            detailSelect.append('<option value="' + item.id + '">' + item.deed_number + '</option>');
                        });
                    },
                    error: function () {
                        alert('An error occurred while fetching details.');
                    },
                });
        });

    });
})(django.jQuery);
});