const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');

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