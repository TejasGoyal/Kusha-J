document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for reaching out! Kusha will get back to you shortly.');
  this.reset();
});
