// script.js
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 10; // Include margin-right
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;
  let startX = 0;

  track.addEventListener('touchstart', startDrag);
  track.addEventListener('touchmove', drag);
  track.addEventListener('touchend', endDrag);

  track.addEventListener('mousedown', startDrag);
  track.addEventListener('mousemove', drag);
  track.addEventListener('mouseup', endDrag);
  track.addEventListener('mouseleave', endDrag);

  function startDrag(e) {
    isDragging = true;
    startX = getPositionX(e);
    track.style.transition = 'none'; // Disable smooth movement during drag
  }

  function drag(e) {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startX;
    track.style.transform = `translateX(${currentTranslate}px)`;
  }

  function endDrag() {
    isDragging = false;
    prevTranslate = currentTranslate;
    track.style.transition = 'transform 0.3s ease-in-out'; // Restore smooth movement
    snapToClosestCard();
  }

  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }

  function snapToClosestCard() {
    const closestIndex = Math.round(-currentTranslate / cardWidth);

    // Clamp to valid indices
    const maxIndex = cards.length - 1;
    const index = Math.max(0, Math.min(closestIndex, maxIndex));

    // Align carousel to show 1.5 cards
    currentTranslate = -index * cardWidth;
    prevTranslate = currentTranslate;
    track.style.transform = `translateX(${currentTranslate}px)`;
  }
});
