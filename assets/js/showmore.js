function toggleExperiences() {
    const section = document.getElementById('exp-section');
    const button = document.getElementById('showmore-exp-btn');

    section.classList.remove('hidden');
    section.classList.add('fade-in');

    button.remove();
}

function toggleProjects() {
    const section = document.getElementById('projects-section');
    const button = document.getElementById('showmore-projects-btn');

    section.classList.remove('hidden');
    section.classList.add('fade-in');

    button.remove();
}