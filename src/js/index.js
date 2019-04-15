import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

import './components/Navigation';
import './vendors/Swiper';
import './components/Map';


(function () {
  'use strict';

  var sections = document.querySelectorAll('[data-section]');

  var navLinks = document.querySelectorAll('.nav__link');

  function getClosestSection() {
    var sectionsLength = sections.length;

    for (var index = 0; index < sectionsLength; index++) {
      if (isBelowScroll(sections.item(index)))
        break;
    }

    selectLink(sections.item(index).id)
  }

  function isBelowScroll(element) {
    var position = element.getBoundingClientRect();
    return position.top >= -100;
  }

  function selectLink(id) {

    Array.prototype.forEach.call(navLinks, function (element) {
      element.classList.remove('active');
    });

    document.querySelector('a[href="#' + id + '"]').classList.add('active');
  }

  window.addEventListener('scroll', function (event) {
    getClosestSection();
  });


})();


