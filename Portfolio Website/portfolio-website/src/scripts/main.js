document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling and section highlight for navigation
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    // Remove highlight classes from all sections
                    document.querySelectorAll('section').forEach(sec => {
                        sec.classList.remove('section-highlight', 'section-highlight-fade');
                    });
                    // Add highlight to the target section
                    target.classList.add('section-highlight');
                    // Smooth scroll
                    target.scrollIntoView({ behavior: 'smooth' });
                    // After 3 seconds, start fade out
                    setTimeout(() => {
                        target.classList.add('section-highlight-fade');
                        target.classList.remove('section-highlight');
                        // Remove fade class after transition (0.5s)
                        setTimeout(() => {
                            target.classList.remove('section-highlight-fade');
                        }, 500);
                    }, 3000);
                }
            }
        });
    });

        // Contact form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;

        // Name validation
        const name = form.name.value.trim();
        const nameError = document.getElementById('name-error');
        if (name.length < 2) {
            nameError.textContent = "Please enter your name.";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        // Email validation
        const email = form.email.value.trim();
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        // Message validation
        const message = form.message.value.trim();
        const messageError = document.getElementById('message-error');
        if (message.length < 10) {
            messageError.textContent = "Message should be at least 10 characters.";
            valid = false;
        } else {
            messageError.textContent = "";
        }

        // Success message
        const formSuccess = document.getElementById('form-success');
        if (valid) {
            formSuccess.textContent = "Thank you! Your message has been sent.";
            form.reset();
        } else {
            formSuccess.textContent = "";
        }
    });

    const aboutText = `I’m Sangameswaran B, a dedicated student and part‑time Web Developer with a strong command of C#, .NET, and Blazor WebAssembly. Passionate about creating seamless and intuitive web experiences, I blend academic insights with practical development skills to deliver robust, modern applications. Whether building responsive UIs or optimizing backend logic, I strive to write clean, efficient code and continuously expand my expertise. Let’s collaborate to bring your ideas to life.`;
    const aboutSection = document.querySelector("#about p");
    if (aboutSection) {
        aboutSection.textContent = aboutText;
    }
});