// importing ids
//milestone 3
var form = document.getElementById('inputs');
var displayform = document.getElementById('display');
//milestone 4 and 5
var shareableLinkContainer = document.getElementById("sharable-link");
var shareableLinkElement = document.getElementById('share-link');
var downloadPdfButton = document.getElementById('download');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //for elements
    var username = document.getElementById('username').value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var birth = document.getElementById("birth").value;
    var contact = document.getElementById("contact").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        age: age,
        email: email,
        birth: birth,
        contact: contact,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    var dynamicResume = "\n  <div class=\"container\">\n    \n    <div id=\"personal-information\">\n      <h2>Personal Information:-</h2>\n      <p><b>Name:-</b><span contenteditable=\"true\">".concat(name, "</span></p>\n      <p><b>Age:-</b><span contenteditable=\"true\">").concat(age, "</span></p>\n      <p><b>Email:-</b><span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>Birth Date:-</b><span contenteditable=\"true\">").concat(birth, "</span></p>\n      <p><b>Contact Number:-</b><span contenteditable=\"true\">").concat(contact, "</span></p>\n    </div>\n\n    <div id=\"education\">\n      <h2>Education:-</h2>\n      <p contenteditable=\"true\">").concat(education, "</p>\n    </div>\n\n    <div id=\"work-experience\">\n      <h2>Experience:-</h2>\n      <p contenteditable=\"true\">").concat(experience, "</p>\n    </div>\n\n    <div id=\"skills\">\n      <h2>Skills:-</h2>\n      <p contenteditable=\"true\">").concat(skills, "</p>\n    </div>\n  </div>\n");
    displayform.innerHTML = dynamicResume;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('age').value =
                resumeData.age;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('birth').value =
                resumeData.birth;
            document.getElementById('contact').value =
                resumeData.contact;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
