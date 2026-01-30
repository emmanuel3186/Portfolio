// Sidebar
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.getElementById('close');

hamburger.onclick = () => sidebar.style.display = 'flex';
closeBtn.onclick = () => sidebar.style.display = 'none';

// Theme toggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent =
    document.body.classList.contains('dark') ? '☀️' : '🌙';
};

// WhatsApp form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const text =
    `Hello Emmanuel,%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  window.open(`https://wa.me/2347011966382?text=${text}`, '_blank');
});
