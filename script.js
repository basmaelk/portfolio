document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById("contactBtn");
  const contactSection = document.getElementById("contactSection");

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // toggle form visibility
    if (contactSection.style.display === "block") {
      contactSection.style.display = "none";
    } else {
      contactSection.style.display = "block";
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Contact form submission
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.style.color = "#ff4d4d";
      formMessage.textContent = "Please fill out all fields.";
    } else {
      formMessage.style.color = "#00cc66";
      formMessage.textContent = "Thank you! Your message has been sent.";
      form.reset();
    }
  });
});



