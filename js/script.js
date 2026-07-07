// Portuguese Now - JavaScript
console.log("Portuguese Now carregado!");
// =======================================
// Render Beginner Modules
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const modulesContainer = document.getElementById("modulesContainer");

    if (!modulesContainer) return;
    if (typeof courses === "undefined") return;

    const beginner = courses.beginner;

    beginner.modules.forEach(module => {

        const card = document.createElement("div");
        card.className = "course-card";

        let lessonsHTML = "";

        module.lessons.forEach(lesson => {
            lessonsHTML += `
                <li>✔️ ${lesson.title} <small>${lesson.duration}</small></li>
            `;
        });

        card.innerHTML = `
            <h3>📚 ${module.title}</h3>

            <p>${beginner.description}</p>

            <ul>
                ${lessonsHTML}
            </ul>

            <a href="lesson1.html" class="course-button">
                Start Module
            </a>
        `;

        modulesContainer.appendChild(card);

    });

});
