// Function to toggle the visibility of a section's content and change button label

function toggleSection(sectionId: string, buttonId: string) {
    const section = document.getElementById(sectionId);   //sections
    const button = document.getElementById(buttonId);    //buttons
    
    if (section && button) {
        const content = section.querySelector('span');
        
        if (content) {
            if (content.style.display === 'none') {
                content.style.display = 'block';
                button.textContent = 'Hide';
            } else {
                content.style.display = 'none';
                button.textContent = 'Show';
            }
        }
    }
}

// Adding event listeners to toggle buttons

document.getElementById('togglePersonalInfo')?.addEventListener('click', () => toggleSection('personal-information', 'togglePersonalInfo'));
document.getElementById('toggleEducation')?.addEventListener('click', () => toggleSection('education', 'toggleEducation'));
document.getElementById('toggleSkills')?.addEventListener('click', () => toggleSection('skills', 'toggleSkills'));
document.getElementById('toggleExperience')?.addEventListener('click', () => toggleSection('work-experience', 'toggleExperience'));
