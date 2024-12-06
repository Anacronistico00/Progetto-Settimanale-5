const navbarToggler = document.querySelector('.navbar-toggler');
const mainContent = document.querySelector('main');

navbarToggler.addEventListener('click', function () {
  mainContent.classList.toggle('main-expanded');
});
const dropdownToggle = document.querySelector('.dropdown-toggle');

dropdownToggle.addEventListener('click', function () {
  mainContent.classList.toggle('second-expanded');
});
