// ==============
// Project Data
// ==============

const projects = {
    project1: {
        title: "Console Contact Book",
        description: "A simple contact book application built using JavaScript. Allows users to add, edit, view, and delete contacts, with data persisted via JSON to local storage.",
        github: "https://github.com/AdendorffL/Mini-Project-Console-Contact-Book",
        image: "./assets/images/projects/console-contact-book.png",
        stack: ["JavaScript", "JSON"],
        live: null
    },
    project2: {
        title: "SmartGear",
        description: "An online sports gear store with live stock updates, search, user auth, role-based access control, and persistent data via SQL Server.",
        github: "https://github.com/AdendorffL/College-Project-SmartGear",
        image: "./assets/images/projects/smartgear.png",
        stack: ["C#", "ASP.NET", "SQL Server", "HTML", "CSS", "JavaScript", "Bootstrap"],
        live: null // replace with URL string if hosted
    },
    project3: {
        title: "Personal Portfolio",
        description: "The portfolio you're looking at — built from scratch with vanilla HTML, CSS, and JavaScript.",
        github: "https://github.com/AdendorffL/New-Portfolio",
        image: "./assets/images/projects/portfolio.png",
        stack: ["HTML", "CSS", "JavaScript"],
        live: null // replace with URL string if hosted
    }
};

// ==============
// Project Rendering
// ==============

const container = document.getElementById("project-container");

Object.values(projects).forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    // Stagger entrance animation via CSS variable
    card.style.setProperty("--i", index);

    card.innerHTML = `
        <div class="project-card-image">
            <img src="${project.image}" alt="${project.title} screenshot" loading="lazy" />
        </div>
        <div class="project-card-body">
            <div class="project-card-header">
                <h3>${project.title}</h3>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link project-link--github" aria-label="View ${project.title} on GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                        GitHub
                    </a>
                    ${project.live ? `
                    <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-link project-link--live" aria-label="View ${project.title} live">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Live
                    </a>` : ''}
                </div>
            </div>
            <p class="project-description">${project.description}</p>
            <ul class="project-stack">
                ${project.stack.map(s => `<li>${s}</li>`).join("")}
            </ul>
        </div>
    `;

    container.appendChild(card);
});