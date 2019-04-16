const isTouchDevice = () => 'ontouchstart' in document.documentElement;

if (isTouchDevice()) {
  document.body.classList.add('touch-device');
} 