// look at you, looking at my code
// https://www.youtube.com/watch?v=NPwyyjtxlzU

function init() {
  window.removeEventListener('DOMContentLoaded', init, false);
  var elementToHide = document.getElementById('page-navigation');

  elementToHide.addEventListener("mouseenter", function handleHoverStart() {
    this.classList.remove('faded');
  });

  elementToHide.addEventListener("mouseleave", function handleHoverEnd() {
    this.classList.add('faded');
  });

  var mobileNavHeadroom = new Headroom(document.getElementById('mobile-navigation'));
  mobileNavHeadroom.init();

}

window.addEventListener('DOMContentLoaded', init);
