const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle"),
      sidebar = body.querySelector("nav"),
      sidebarToggle = body.querySelector(".sidebar-toggle"),
      logoImage = body.querySelector(".logo-image img");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
    // Change the logo image when the sidebar is closed
    logoImage.src = "https://www.supremesecurities.com/content/images/logo-icon.png"; // Change this to the URL of your closed image
} else {
    // Change the logo image when the sidebar is open
    logoImage.src = "https://www.supremesecurities.com/content/images/logo.png"; // Change this to the URL of your open image
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    // Change the logo image based on the sidebar's open/close status
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
        logoImage.src = "https://www.supremesecurities.com/content/images/logo-icon.png"; // Change this to the URL of your closed image
    } else {
        localStorage.setItem("status", "open");
        logoImage.src = "https://www.supremesecurities.com/content/images/logo.png"; // Change this to the URL of your open image
    }
});


    // JavaScript for dropdown functionality
    document.querySelectorAll('.dropdown').forEach(item => {
        item.addEventListener('click', event => {
            event.stopPropagation();
            item.classList.toggle('active');
        });
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', event => {
        document.querySelectorAll('.dropdown').forEach(item => {
            if (!item.contains(event.target)) {
                item.classList.remove('active');
            }
        });
    });


// modal
$(document).ready(function () {
        // Handle form submission
        $('#saveChangesBtn').click(function () {
            // Gather form data
            var fullName = $('#fullName').val();
            var role = $('#role').val();
            var email = $('#email').val();
            var mobile = $('#mobile').val();
            var address = $('#address').val();
            var loginName = $('#loginName').val();
            var password = $('#password').val();
            var confirmPassword = $('#confirmPassword').val();
            
            // Perform validation here if needed

            // Example: Log form data
            console.log("Full Name: " + fullName);
            console.log("Role: " + role);
            console.log("Email: " + email);
            console.log("Mobile: " + mobile);
            console.log("Address: " + address);
            console.log("Login Name: " + loginName);
            console.log("Password: " + password);
            console.log("Confirm Password: " + confirmPassword);

            // Close modal
            $('#createUserModal').modal('hide');
        });
    });



// Sample user data
var users = [
    { fullName: "John Doe", role: "Super Admin", email: "john@example.com", mobile: "1234567890", address: "123 Main St", loginName: "johndoe" },
    // Add more user data as needed
];

// Function to populate the table with user data
function populateTable() {
    var tableBody = document.querySelector('.table tbody');
    tableBody.innerHTML = ''; // Clear existing table rows

    users.forEach(function (user) {
        var row = '<tr>' +
            '<td>' + user.fullName + '</td>' +
            '<td>' + user.role + '</td>' +
            '<td>' + user.email + '</td>' +
            '<td>' + user.mobile + '</td>' +
            '<td>' + user.address + '</td>' +
            '<td>' + user.loginName + '</td>' +
            '<td><button class="btn btn-primary"><i class="fas fa-pen"></i></button> <button class="btn btn-danger"><i class="fas fa-trash"></i></button></td>' +
            '</tr>';
        tableBody.innerHTML += row;
    });
}

// Call the function to populate the table initially
populateTable();



// Sample policy data
var policies = [
    { profileName: "Standard", type: "Application", minUppercase: 1, minLowercase: 1, minNumeric: 1, minSpecial: 1, minLength: 8, maxLength: 16 },
    { profileName: "Advanced", type: "OS", minUppercase: 2, minLowercase: 2, minNumeric: 2, minSpecial: 2, minLength: 10, maxLength: 20 }
    // Add more policy data as needed
];

// Function to populate the table with policy data
function populatePolicyTable() {
    var tableBody = document.getElementById('policyTableBody');
    tableBody.innerHTML = ''; // Clear existing table rows

    policies.forEach(function (policy) {
        var row = '<tr>' +
            '<td>' + policy.profileName + '</td>' +
            '<td>' + policy.type + '</td>' +
            '<td>' + policy.minUppercase + '</td>' +
            '<td>' + policy.minLowercase + '</td>' +
            '<td>' + policy.minNumeric + '</td>' +
            '<td>' + policy.minSpecial + '</td>' +
            '<td>' + policy.minLength + '</td>' +
            '<td>' + policy.maxLength + '</td>' +
            '<td>' +
            '<button class="btn btn-primary" onclick="editPolicy()"><i class="fas fa-pen"></i></button> ' +
            '<button class="btn btn-danger" onclick="deletePolicy()"><i class="fas fa-trash"></i></button>' +
            '</td>' +
            '</tr>';
        tableBody.innerHTML += row;
    });
}

// Call the function to populate the table initially
populatePolicyTable();
