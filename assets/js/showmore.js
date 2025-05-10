function toggleSection() {
    const section = document.getElementById('hidden-section');
    const button = document.getElementById('showmore-btn');

    section.classList.remove('hidden');
    section.classList.add('fade-in');

    button.remove();
}