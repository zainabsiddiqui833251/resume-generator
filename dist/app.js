"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-button');
    const hiddenItems = document.querySelectorAll('.hidden');
    if (button) {
        button.addEventListener('click', () => {
            hiddenItems.forEach(item => {
                item.classList.toggle('hidden');
            });
            if (button.textContent === 'Show More') {
                button.textContent = 'Show Less';
            }
            else {
                button.textContent = 'Show More';
            }
        });
    }
});
// app.ts
document.addEventListener('DOMContentLoaded', () => {
    const openFormButton = document.getElementById('open-form');
    const formOverlay = document.getElementById('form-overlay');
    const closeFormButton = document.getElementById('close-form');
    const resumeOverlay = document.getElementById('resume-overlay');
    const closeResumeButton = document.getElementById('close-resume');
    const form = document.getElementById('resume-form');
    const resumeContainer = document.getElementById('resume');
    openFormButton.addEventListener('click', () => {
        formOverlay.style.display = 'flex';
    });
    closeFormButton.addEventListener('click', () => {
        formOverlay.style.display = 'none';
    });
    closeResumeButton.addEventListener('click', () => {
        resumeOverlay.style.display = 'none';
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const profilePic = document.getElementById('profile-pic').value;
        const about = document.getElementById('about').value;
        const contactPhone = document.getElementById('contact-phone').value;
        const contactGithub = document.getElementById('contact-github').value;
        const contactLinkedin = document.getElementById('contact-linkedin').value;
        const contactWhatsapp = document.getElementById('contact-whatsapp').value;
        const contactTwitter = document.getElementById('contact-twitter').value;
        const education = document.getElementById('education').value;
        const skills = document.getElementById('skills').value;
        const courses = document.getElementById('courses').value;
        const experience = document.getElementById('experience').value;
        const resumeHTML = `
            <header>
                <div class="profile-pic">
                    <img src="${profilePic}" alt="profile">
                </div>
                <div class="name">
                    <h1>${name}</h1>
                    <h2>${title}</h2>
                </div>
            </header>
            <div class="personal-info container">
                <div class="heading">
                    <h2><i class="fa fa-id-badge"></i>&#8199; personal information</h2>
                </div>
                <div class="info">
                    <p>${about}</p>
                    <p>contact:</p>
                    <ul>
                        <li><a href="tel:${contactPhone}" target="_blank"><i class="fa-solid fa-phone"></i></a></li>
                        <li><a href="${contactGithub}" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href="${contactLinkedin}" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="${contactWhatsapp}" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
                        <li><a href="${contactTwitter}" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="education container">
                <div class="heading">
                    <h2><i class="fa-solid fa-graduation-cap"></i>&#8199;education</h2>
                </div>
                <div class="info">
                    ${education}
                </div>
            </div>
            <div class="skills container">
                <div class="heading">
                    <h2><i class="fa fa-lightbulb"></i>&#8199;skills</h2>
                </div>
                <div class="info">
                    ${skills}
                </div>
            </div>
            <div class="courses container">
                <div class="heading">
                    <h2><i class="fa-solid fa-laptop-code"></i>&#8199;courses</h2>
                </div>
                <div class="info">
                    ${courses}
                </div>
            </div>
            <div class="experience container">
                <div class="heading">
                    <h2><i class="fa fa-briefcase"></i>&#8199;work experience(None)</h2>
                </div>
                <div class="info">
                    ${experience}
                </div>
            </div>
        `;
        resumeContainer.innerHTML = resumeHTML;
        formOverlay.style.display = 'none';
        resumeOverlay.style.display = 'flex';
    });
});
