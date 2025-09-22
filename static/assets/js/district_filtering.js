$(document).ready(function () {
  $('#HomeDistrict').on('change', function () {
    const districtCode = $(this).val();
    const upazillaSelect = $('#Upazilla');

    // Destroy and rebuild selectpicker to fully reset
    upazillaSelect.empty(); // Clear all options
    upazillaSelect.selectpicker('destroy'); // Destroy the Bootstrap Select behavior
    upazillaSelect.append('<option value="" selected>Select Upazilla</option>'); // Add placeholder back

    if (districtCode) {
      $.ajax({
        url: '/get_upazillas/',
        type: 'GET',
        data: {
          district_code: districtCode,
          _: new Date().getTime()
        },
        dataType: 'json',
        cache: false,
        success: function (data) {
          if (data.length === 0) {
            upazillaSelect.append('<option value="">No Upazilla found</option>');
          } else {
            $.each(data, function (index, item) {
              upazillaSelect.append(
                '<option value="' + item.UpazillaCode + '">' + item.UpazillaName + '</option>'
              );
            });
          }

          // Re-initialize the selectpicker
          upazillaSelect.selectpicker();
        },
        error: function (xhr, status, error) {
          console.error("Error fetching Upazillas:", error);
        }
      });
    } else {
      upazillaSelect.selectpicker(); // Re-initialize empty selectpicker if no district selected
    }
  });
});
