// script.js

// Function to load HTML files into the specified container
function loadSection(id, file) {
    fetch(`pages/${file}`)
        .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${file}`);
            return res.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error(err));
}

// Load all sections into index.html placeholders
loadSection("navbar", "navbar.html");
loadSection("hero", "hero.html");
loadSection("about", "about.html");
loadSection("skills", "skills.html");
loadSection("projects", "projects.html");
loadSection("contact", "contact.html");
loadSection("footer", "footer.html");

// Wait until contact form is loaded before adding EmailJS handler
document.addEventListener("DOMContentLoaded", () => {
    // Initialize EmailJS with your Public Key
    emailjs.init("jndEdzz5uMYaOiOlE"); // Replace with your EmailJS Public Key

    // Event delegation for form submission
    document.addEventListener("submit", function (event) {
        if (event.target && event.target.id === "contactForm") {
            event.preventDefault();

            emailjs.sendForm("service_7x8m8w1", "template_scp0c7e", event.target)
                .then(() => {
                    alert("✅ Message sent successfully!");
                    event.target.reset();
                })
                .catch(err => {
                    console.error("❌ EmailJS Error:", err);
                    alert("Failed to send message. Please try again.");
                });
        }
    });
});
