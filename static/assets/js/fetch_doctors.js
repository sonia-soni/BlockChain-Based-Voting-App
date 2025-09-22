//document.addEventListener("DOMContentLoaded", function () {
//    document.getElementById("fetchDoctors").addEventListener("click", function () {
//        var workareat = document.getElementById("workarea").value;
//
//        // Check if workarea is selected
//        if (!workareat) {
//            alert("Please select a territory!");
//            return;
//        }
//
//        console.log("Fetching doctors for Territory:", workareat);
//
//        var tableContainer = document.getElementById("doctorTableContainer");
//        tableContainer.innerHTML = ""; // Clear previous content
//
//        // Show loader while fetching data
//        var loader = document.createElement("div");
//        loader.innerHTML = `
//            <div class="d-flex justify-content-center mt-3">
//                <div class="spinner-border text-primary" role="status">
//                    <span class="visually-hidden">Loading...</span>
//                </div>
//            </div>`;
//        tableContainer.appendChild(loader);
//
//        // Fetch doctors based on workarea
//        fetch(`/api/doctors/?workareat=${workareat}`)
//            .then(response => {
//                if (!response.ok) {
//                    throw new Error(`HTTP error! Status: ${response.status}`);
//                }
//                return response.json();
//            })
//            .then(data => {
//                tableContainer.innerHTML = ""; // Clear loader
//
//                // Check if no data is returned
//                if (!data || data.length === 0) {
//                    tableContainer.innerHTML = "<p class='alert alert-warning'>No doctors found.</p>";
//                    return;
//                }
//
//                // Build the table dynamically
//                var tableHTML = `<table class="table table-bordered table-striped mt-3">
//                    <thead class="table-dark">
//                        <tr>
//                            <th>Serial</th>
//                            <th>Doctor Name</th>
//                            <th>Title</th>
//                            <th>Specialty Code</th>
//                            <th>Chamber Address</th>
//                            <th>Contact Details</th>
//                            <th>Approval Status</th>
//                        </tr>
//                    </thead>
//                    <tbody>`;
//
//                // Iterate through the doctor data and build rows with serial numbers
//                data.forEach((doctor, index) => {
//                    let approvalStatus = doctor.approvalstatus === 1 ?
//                        "<span class='badge bg-success'>Approved</span>" :
//                        "<span class='badge bg-warning'>Pending</span>";
//
//                    tableHTML += `<tr>
//                        <td>${index + 1}</td>  <!-- Serial number starts from 1 -->
//                        <td>${doctor.doctorname1 || "N/A"}</td>
//                        <td>${doctor.title || "N/A"}</td>
//                        <td>${doctor.specialitycode || "N/A"}</td>
//                        <td>${doctor.chamber_address || "N/A"}</td>
//                        <td>${doctor.contact_details || "N/A"}</td>
//                        <td>${approvalStatus}</td>
//                    </tr>`;
//                });
//
//                tableHTML += `</tbody></table>`;
//                tableContainer.innerHTML = tableHTML;
//            })
//            .catch(error => {
//                console.error("Error fetching doctors:", error);
//                tableContainer.innerHTML = "<p class='alert alert-danger'>Error loading doctors. Please try again.</p>";
//            });
//    });
//});
