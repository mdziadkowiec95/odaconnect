import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

import * as polyfills from './base/polyfills';

polyfills.matches();
polyfills.closest();

import './base/checkTouchDevice';
import './components/Navigation';
import './vendors/Swiper';
import './components/Map';
import './components/CookiesPopup';


