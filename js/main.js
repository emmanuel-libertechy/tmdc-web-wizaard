document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded!");

  // Example: Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});


// Contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.....";
      formMessage.style.color = "red";
      return;
    }

    // Simulate sending form (you can replace this with an API call)
    formMessage.textContent = "Sending message...";
    formMessage.style.color = "black";

    setTimeout(() => {
      formMessage.textContent = "Thank you! Your message has been sent.";
      formMessage.style.color = "green";
      form.reset();
    }, 1000);
  });
});
