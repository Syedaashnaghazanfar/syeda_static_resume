// importing ids

//milestone 3
const form = document.getElementById('inputs') as HTMLFormElement;
const displayform = document.getElementById('display') as HTMLDivElement;
//milestone 4 and 5
const shareableLinkContainer = document.getElementById("sharable-link") as HTMLDivElement;
const shareableLinkElement = document.getElementById('share-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download') as HTMLButtonElement;



form.addEventListener("submit",(event :Event) => {
    event.preventDefault();
    
    //for elements
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const age = (document.getElementById("age") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const birth = (document.getElementById("birth") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;


    // Save form data in localStorage with the username as the key
const resumeData = {
  name,
  age,
  email,
  birth,
  contact,
  education,
  experience,
  skills
  };
  localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally

    const dynamicResume = `
  <div class="container">
    
    <div id="personal-information">
      <h2>Personal Information:-</h2>
      <p><b>Name:-</b><span contenteditable="true">${name}</span></p>
      <p><b>Age:-</b><span contenteditable="true">${age}</span></p>
      <p><b>Email:-</b><span contenteditable="true">${email}</span></p>
      <p><b>Birth Date:-</b><span contenteditable="true">${birth}</span></p>
      <p><b>Contact Number:-</b><span contenteditable="true">${contact}</span></p>
    </div>

    <div id="education">
      <h2>Education:-</h2>
      <p contenteditable="true">${education}</p>
    </div>

    <div id="work-experience">
      <h2>Experience:-</h2>
      <p contenteditable="true">${experience}</p>
    </div>

    <div id="skills">
      <h2>Skills:-</h2>
      <p contenteditable="true">${skills}</p>
    </div>
  </div>
`;

displayform.innerHTML = dynamicResume;

// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

  // Autofill form if data is found in localStorage
  const savedResumeData = localStorage.getItem(username);
  if (savedResumeData) {
  const resumeData = JSON.parse(savedResumeData);
  (document.getElementById('username') as HTMLInputElement).value =
  username;
  (document.getElementById('name') as HTMLInputElement).value =
  resumeData.name;
  (document.getElementById('age') as HTMLInputElement).value =
  resumeData.age;
  (document.getElementById('email') as HTMLInputElement).value =
  resumeData.email;
  (document.getElementById('birth') as HTMLInputElement).value =
  resumeData.birth;
  (document.getElementById('contact') as HTMLInputElement).value =
  resumeData.contact;
  (document.getElementById('education') as HTMLTextAreaElement).value =
  resumeData.education;
  (document.getElementById('experience') as HTMLTextAreaElement).value
  = resumeData.experience;
  (document.getElementById('skills') as HTMLTextAreaElement).value =
  resumeData.skills;
  }
  }
  });
































