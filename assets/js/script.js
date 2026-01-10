const slider = document.getElementById('workSlider');
const nextBtn = document.getElementById('nextWork');
const prevBtn = document.getElementById('prevWork');
const items = document.querySelectorAll('.work-item');

let currentIndex = 0;
const totalItems = items.length;

function moveSlider() {
  if (window.innerWidth <= 768) return;

  const itemWidth = items[0].offsetWidth + 20;
  slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (window.innerWidth <= 768) return;

  if (currentIndex < totalItems - 2) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  moveSlider();
});

prevBtn.addEventListener('click', () => {
  if (window.innerWidth <= 768) return;

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 2;
  }
  moveSlider();
});

window.addEventListener('resize', moveSlider);
