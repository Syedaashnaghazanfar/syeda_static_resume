// Function to toggle the visibility of a section's content and change button label
var _a, _b, _c, _d;
function toggleSection(sectionId, buttonId) {
    var section = document.getElementById(sectionId); //sections
    var button = document.getElementById(buttonId); //buttons
    if (section && button) {
        var content = section.querySelector('span');
        if (content) {
            if (content.style.display === 'none') {
                content.style.display = 'block';
                button.textContent = 'Hide';
            }
            else {
                content.style.display = 'none';
                button.textContent = 'Show';
            }
        }
    }
}
// Adding event listeners to toggle buttons
(_a = document.getElementById('togglePersonalInfo')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return toggleSection('personal-information', 'togglePersonalInfo'); });
(_b = document.getElementById('toggleEducation')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return toggleSection('education', 'toggleEducation'); });
(_c = document.getElementById('toggleSkills')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return toggleSection('skills', 'toggleSkills'); });
(_d = document.getElementById('toggleExperience')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { return toggleSection('work-experience', 'toggleExperience'); });
