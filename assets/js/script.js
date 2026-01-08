const slider = document.getElementById('workSlider');
const nextBtn = document.getElementById('nextWork');
const prevBtn = document.getElementById('prevWork');
const items = document.querySelectorAll('.work-item');

let currentIndex = 0;
const totalItems = items.length;

function moveSlider() {
    // Kita ambil lebar satu item secara dinamis + gapnya
    const itemWidth = items[0].offsetWidth + 20; 
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    // Karena kita menampilkan 2, maka batas maksimal indeks adalah total minus 2
    if (currentIndex < totalItems - 2) {
        currentIndex++;
    } else {
        currentIndex = 0; // Balik ke awal
    }
    moveSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 2; // Balik ke akhir
    }
    moveSlider();
});

// Pastikan tetap pas saat window di-resize
window.addEventListener('resize', moveSlider);