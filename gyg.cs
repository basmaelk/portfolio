console.log("Script loaded!");



document.addEventListener("DOMContentLoaded", function () {
  console.log("JS is running!"); // Test line
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
        formMessage.style.color = '#ff4d4d';
        formMessage.textContent = 'Please fill out all fields.';
      } else {
        formMessage.style.color = '#00cc66';
        formMessage.textContent = 'Thank you! Your message has been sent.';
        contactForm.reset();
      }
    });
  }
});
