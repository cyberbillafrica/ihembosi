// Fetch the valid codes from the JSON file
fetch('code.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch the access codes');
        }
        return response.json();
    })
    .then(data => {
        const validCodes = data.validCodes;  // Array of valid codes

        // Add the event listener for form submission
        document.getElementById('accessForm').addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent default form submission

            const studentName = document.getElementById('student_name').value.trim();  // Get student's name
            const userCode = document.getElementById('access_code').value.trim();  // Get access code

            // Check if the student's name is not empty and the code is valid
            if (studentName !== "" && validCodes.includes(userCode)) {
                // Store the student's name in localStorage
                localStorage.setItem('studentName', studentName);

                // Redirect to the portal page
                window.location.href = "portal.html";
            } else {
                // If the name or code is incorrect, show an error message
                document.getElementById('error_msg').style.display = 'block';
            }
        });
    })
    .catch(error => {
        console.error('Error fetching or processing the JSON:', error);
    });
