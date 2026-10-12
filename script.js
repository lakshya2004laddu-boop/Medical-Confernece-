
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent =
    "Demo only: your details have not been saved. Connect a registration service to receive submissions.";

  registrationForm.reset();
});
