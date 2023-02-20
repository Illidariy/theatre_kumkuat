const navbar = document.querySelector('.nav__flex');

window.onscroll = () => {
  if (window.scrollY > 500) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};

console.log('lll');
