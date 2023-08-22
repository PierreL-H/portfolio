const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
const links = document.querySelectorAll('.primary-nav a');
const email = document.querySelector('.email-text');
const copyButton = document.querySelector('.copy-button');
const tooltip = document.querySelector('.tooltip');

navToggle.addEventListener('click', () => {
  if(primaryNav.getAttribute('data-visible') === 'false') {
    primaryNav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true')
  } else {
    primaryNav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false')
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    primaryNav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false')
  });
});

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(email.textContent);
  tooltip.setAttribute('data-visible', 'true');
  setTimeout(() => {
    tooltip.setAttribute('data-visible', 'false');
  }, 2000);
});