// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = 
      document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let feedback = document.getElementById("formFeedback");

    let errors = [];
    if (name === "") errors.push("Name is required.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push("Please enter a valid email.");
    if (message.length < 10) errors.push("Message must be at least 10 characters.");

    if (errors.length > 0) {
      feedback.style.color = "red";
      feedback.textContent = errors.join(" ");
    } else {
      feedback.style.color = "green";
      feedback.textContent = "Message sent successfully!";
      contactForm.reset();
    }
  });
}
