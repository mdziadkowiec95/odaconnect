const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');

document.querySelector('.header').addEventListener('click', (e) => {
  if (e.target.matches('.nav-toggler, .nav-toggler *')) {
    e.preventDefault();
    navToggler.classList.toggle('is-open');
    navMenu.classList.toggle('collapsed');
    // document.body.classList.toggle('is-blocked');
  } else if (e.target.matches('.nav__link, .nav__link *, .reason__box, .reason__box *')) {
    const href = e.target.closest('a').href;
    const hrefArr = href.split('#');
    const ID = hrefArr[1];

    document.getElementById(ID).scrollIntoView({ behavior: 'smooth' });

    navToggler.classList.remove('is-open');
    navMenu.classList.remove('collapsed');
  }
});


const handleScrollActions = (e) => {
  if (window.pageYOffset > 0) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
};


window.addEventListener('scroll', handleScrollActions, false);