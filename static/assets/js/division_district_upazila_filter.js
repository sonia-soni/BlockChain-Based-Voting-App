$(document).ready(function () {
  const divisionSelect = $('#ch_divi');      // ✅ Division dropdown
  const districtSelect = $('#ch_dist');      // ✅ District dropdown
  const upazilaSelect = $('#ch_upazila');    // ✅ Upazila dropdown

  // Division → District
  divisionSelect.on('change', function () {
    const divisionCode = $(this).val();

    // Reset District
    districtSelect.empty();
    districtSelect.selectpicker('destroy');
    districtSelect.append('<option value="" selected>Select District</option>');

    // Reset Upazila too
    upazilaSelect.empty();
    upazilaSelect.selectpicker('destroy');
    upazilaSelect.append('<option value="" selected>Select Upazila</option>');

    if (divisionCode) {
      $.ajax({
        url: '/get_districts/',
        type: 'GET',
        data: {
          division_code: divisionCode,
          _: new Date().getTime()
        },
        dataType: 'json',
        cache: false,
        success: function (data) {
          if (data.length === 0) {
            districtSelect.append('<option value="">No District found</option>');
          } else {
            $.each(data, function (index, item) {
              districtSelect.append(
                `<option value="${item.DistrictCode}">${item.DistrictName}</option>`
              );
            });
          }
          districtSelect.selectpicker();
        },
        error: function (xhr, status, error) {
          console.error("Error fetching districts:", error);
        }
      });
    } else {
      districtSelect.selectpicker(); // reinit empty
    }
  });

  // District → Upazila
  districtSelect.on('change', function () {
    const districtCode = $(this).val();

    upazilaSelect.empty();
    upazilaSelect.selectpicker('destroy');
    upazilaSelect.append('<option value="" selected>Select Upazila</option>');

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
            upazilaSelect.append('<option value="">No Upazila found</option>');
          } else {
            $.each(data, function (index, item) {
              upazilaSelect.append(
                `<option value="${item.UpazillaCode}">${item.UpazillaName}</option>`
              );
            });
          }
          upazilaSelect.selectpicker();
        },
        error: function (xhr, status, error) {
          console.error("Error fetching upazilas:", error);
        }
      });
    } else {
      upazilaSelect.selectpicker();
    }
  });
});
