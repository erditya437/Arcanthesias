// =====================
// Hamburger Menu Toggle
// =====================
 const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');

 hamburger.addEventListener('click', () => {
  // toggle hidden class
  mobileMenu.classList.toggle('hidden');

  // animate max-height
  if (mobileMenu.classList.contains('max-h-0')) {
    mobileMenu.classList.remove('max-h-0');
    mobileMenu.classList.add('max-h-96'); // max height sesuai kebutuhan
  } else {
    mobileMenu.classList.remove('max-h-96');
    mobileMenu.classList.add('max-h-0');
  }

  // toggle icon
  iconMenu.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
});

// ===============================
// Parallax + Scroll Scale Effect
// ===============================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Parallax effect
  document.querySelectorAll('.parallax').forEach(el => {
    el.style.transform = `translateY(${scrollY * -0.3}px)`;
  });

  // Scale effect on hero text
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const maxScale = 1;
  const minScale = 0.7;
  const heroHeight = window.innerHeight;
  const scrollFactor = Math.min(1, scrollY / heroHeight);
  const scale = maxScale - (scrollFactor * (maxScale - minScale));

  if (heroTitle) heroTitle.style.transform = `scale(${scale})`;
  if (heroSubtitle) heroSubtitle.style.transform = `scale(${scale})`;
});

// ============================
// Fade-in Animation on Scroll
// ============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('visible', entry.isIntersecting);
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


// =====================
// Music Toggle
// =====================
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

let isPlaying = false;

musicToggle.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicToggle.textContent = 'Aktifkan Lagu';
  } else {
    music.play();
    musicToggle.textContent = 'Nonaktifkan Lagu';
  }
  isPlaying = !isPlaying;
});
