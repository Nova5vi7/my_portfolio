function initSmoothScroll(anchors) {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}

const anchors = document.querySelectorAll('a[href*="#"]');

if (anchors.length > 0) {
  initSmoothScroll(anchors);
}
