import { throttle } from 'underscore';

const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('[data-section]');

const handleNavElementsClick = (e) => {
  if (e.target.matches('.nav-toggler, .nav-toggler *')) {
    e.preventDefault();
    navToggler.classList.toggle('is-open');
    navMenu.classList.toggle('collapsed');
  } else if (e.target.matches('.nav__link, .nav__link *, .reason__box, .reason__box *')) {
    const href = e.target.closest('a').href;
    const hrefArr = href.split('#');
    const ID = hrefArr[1];

    document.getElementById(ID).scrollIntoView({ behavior: 'smooth' });

    navToggler.classList.remove('is-open');
    navMenu.classList.remove('collapsed');
  }
}

document.querySelector('.header').addEventListener('click', handleNavElementsClick);

const handleNavSize = (e) => {
  if (window.pageYOffset > 0) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
};

/** Scroll Spy */

const getClosestSection = (e) => {
  const sectionsLength = sections.length;

  for (let index = 0; index < sectionsLength; index++) {
    if (isBelowScroll(sections.item(index))) {
      selectLink(sections.item(index).id);
      break;
    }
  }
}

const isBelowScroll = (el) => {
  const position = el.getBoundingClientRect();
  return position.top > 0;
}

const selectLink = (id) => {

  Array.prototype.forEach.call(navLinks, function (el) {
    el.classList.remove('active');
  });

  if (sections[0].getBoundingClientRect().top < window.innerHeight + 200) {
    document.querySelector('a[href="#' + id + '"]').classList.add('active');
  }
}

/** Throttled event handlers */
const throttledGetClosestSection = throttle(getClosestSection, 250);
const throttledHandleNavSize = throttle(handleNavSize, 150);

/** Event listeners */
window.addEventListener('scroll', (e) => {
  throttledHandleNavSize(e);
  throttledGetClosestSection(e);
}, false);