//==============
// Skills Data
//==============

const skills = {}

//==============
// Project Data
//==============

const projects = {
    "project1": {
        "title": "Console Contact Book",
        "description": "A simple contact book application built using JavaScript. It allows users to add, edit, view, and delete contacts. The application uses local storage via JSON to save contact information.",
        "github": "https://github.com/AdendorffL/Mini-Project-Console-Contact-Book",
        "image": "../assets/images/projects/console-contact-book.png",
        "stack": ["JavaScript", "JSON"]
    },
    "project2": {
        "title": "SmartGear",
        "description": "An online store for sports gear. It features a user-friendly interface, product listings, live stock updates, live search functionality, user login and registration, role-based access control, and persistent data using SQL Server.",
        "github": "https://github.com/AdendorffL/College-Project-SmartGear",
        "image": "../assets/images/projects/smartgear.png",
        "stack": ["C#", "ASP.NET", "SQL Server", "HTML", "CSS", "JavaScript", "Bootstrap"]
    },

    "project3": {
        "title": "Personal Portfolio",
        "description": "A personal portfolio website showcasing my projects, skills, and experience. It includes sections for about me, projects, contact information.",
        "github": "https://github.com/AdendorffL/New-Portfolio",
        "image": "../assets/images/projects/portfolio.png",
        "stack": ["HTML", "CSS", "JavaScript"]
    }
}

// ==============
// Project Rendering
// ==============

for (let project in projects) {
    const container = document.getElementById("project-container");
    // Create project card
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    // Create project image
    const projectImg = document.createElement("div");
    projectImg.className = "project-img";
    const img = document.createElement("img");
    img.src = projects[project].image;
    projectImg.appendChild(img);
    // Create project title and description
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = projects[project].title;
    const projectDescription = document.createElement("p");
    projectDescription.textContent = projects[project].description;
    // Create project stack
    const projectStackList = document.createElement("ul");
    projects[project].stack.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        projectStackList.appendChild(skillItem);
    });
    // Add github link
    const githubLink = document.createElement("a");
    githubLink.href = projects[project].github;
    githubLink.textContent = "View on GitHub";
    githubLink.target = "_blank";
    // Append all elements to the project card
    projectCard.appendChild(projectImg);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(projectStackList);
    projectCard.appendChild(githubLink);
    // Append the project card to the container
    container.appendChild(projectCard);
}
