// 1. Grab the hamburger menu
const hamburger = document.getElementById('hamburger'); 
const sidebar = document.querySelector('.sidebar');
const body = document.body;
const closeBtn = document.getElementById('close');

// 2. Open Sidebar function
function showSidebar() {
  sidebar.style.display = 'flex';
  body.style.overflow = 'hidden'; 
}

// 3. Hide Sidebar function
function hideSidebar() {
  sidebar.style.display = 'none';
  body.style.overflow = 'auto'; 
}

// 4. Add the Click Event to the Hamburger
if (hamburger) {
  hamburger.addEventListener('click', showSidebar);
}

// 5. Keep your close button listener
if (closeBtn) {
  closeBtn.addEventListener('click', hideSidebar);
}

email.addEventListener('input', function() {
    email.classList.remove('error-border');
});
fullName.addEventListener('input', function() {
    fullName.classList.remove('error-border');
});

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const emailValue = email.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        email.classList.add('error-border');
        fullName.classList.add('error-border');
    } else {
        email.classList.remove('error-border');
        fullName.classList.remove('error-border');
        email.value = '';
        fullName.value = '';
        alert('Thank you for reaching out!');
    }
     });
const revealElements = [
  { el: document.querySelector('#home'), type: 'reveal-up' },
  { el: document.querySelector('#features'), type: 'reveal-up' },
  { el: document.querySelector('#skill'), type: 'reveal-left' },
  { el: document.querySelector('#about'), type: 'reveal-right' },
  { el: document.querySelector('#services'), type: 'reveal-up' },
  { el: document.querySelector('#blog'), type: 'reveal-left' },
  { el: document.querySelector('#contact'), type: 'reveal-up' },
];

revealElements.forEach(item => {
  if (item.el) {
    item.el.classList.add('reveal', item.type);
  }
});

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(item => {
    if (!item.el) return;

    const top = item.el.getBoundingClientRect().top;
    if (top < windowHeight - 120) {
      item.el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const projectCards = document.querySelectorAll('.project-cards > div');

function revealCards() {
  const windowHeight = window.innerHeight;

  projectCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      card.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealCards);
revealCards();

const themeToggle = document.getElementById('themeToggle');

// load theme on refresh
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
} else {
  document.body.classList.remove('dark');
  themeToggle.textContent = '🌙';
}

// toggle on click
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');

  if (isDark) {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  }
});

