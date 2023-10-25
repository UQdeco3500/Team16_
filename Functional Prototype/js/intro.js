document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.skip-button').addEventListener('click', function() {
    window.location.href = 'home.html';
  });
});

document.addEventListener('click', function(event) {
  if (!event.target.classList.contains('skip-button')) {
    window.location.href = 'intro2.html';
  }
});