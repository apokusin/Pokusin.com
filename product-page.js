// look at you, looking at my code
// https://www.youtube.com/watch?v=NPwyyjtxlzU

function init() {
  window.removeEventListener("load", init, false);
  var elementToHide = document.getElementById('page-navigation');

  elementToHide.addEventListener("mouseenter", function handleHoverStart() {
    this.classList.remove('faded');
  });

  elementToHide.addEventListener("mouseleave", function handleHoverEnd() {
    this.classList.add('faded');
  });
}

window.addEventListener('load', init);
