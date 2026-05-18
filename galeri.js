const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Hapus class active dari semua link
    navLinks.forEach((l) => l.classList.remove("active"));
    // Tambah class active ke link yang diklik
    this.classList.add("active");
  });
});

document.getElementById("nav-gallery").classList.add("active");

/* ================= MENU TOGGLE ================= */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

/* ================= BACKGROUND SLIDE 2 DETIK ================= */
let slides = document.querySelectorAll(".hero-bg");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 2000);

/* ================= LANGUAGE SWITCH ================= */
function setLanguage(lang) {
  if (lang === "id") {
    document.getElementById("nav-rental").innerText = "Paket Tour & Wisata";
    document.getElementById("nav-pickup").innerText = "Layanan Jemput";
    document.getElementById("nav-wisata").innerText = "Wisata";
    document.getElementById("nav-gallery").innerText = "Gallery";
    document.getElementById("nav-booking").innerText = "Booking";
    document.getElementById("hero-title").innerHTML =
      "Solusi Perjalanan<br>Wisata Anda";
    document.getElementById("hero-button").innerText = "Booking Sekarang";
  }

  if (lang === "en") {
    document.getElementById("nav-rental").innerText = "Tour & Travel Packages";
    document.getElementById("nav-pickup").innerText = "Pickup Service";
    document.getElementById("nav-wisata").innerText = "Tour";
    document.getElementById("nav-gallery").innerText = "Gallery";
    document.getElementById("nav-booking").innerText = "Booking";
    document.getElementById("hero-title").innerHTML = "Your Travel<br>Solution";
    document.getElementById("hero-button").innerText = "Book Now";
  }
}

/* ── Lightbox ── */
  const lb     = document.getElementById('lightbox');
  const lbImg  = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');
 
  function openLB(src) {
    lbImg.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLB() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 300);
  }
 
  // Grid cards
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => openLB(card.dataset.src));
  });
 
  // Strip images
  document.querySelectorAll('.strip-img').forEach(img => {
    img.addEventListener('click', () => openLB(img.src.replace('w=400','w=1200').replace('w=500','w=1200').replace('w=200','w=1200')));
  });
 
  lbClose.addEventListener('click', closeLB);
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
 
  /* ── Drag-to-scroll strip ── */
  const strip = document.querySelector('.gallery-strip-wrap');
  let isDragging = false, startX, scrollLeft;
 
  strip.addEventListener('mousedown', e => {
    isDragging = true;
    startX     = e.pageX - strip.offsetLeft;
    scrollLeft = strip.scrollLeft;
    strip.style.cursor = 'grabbing';
  });
  strip.addEventListener('mouseleave', () => { isDragging = false; strip.style.cursor = ''; });
  strip.addEventListener('mouseup',    () => { isDragging = false; strip.style.cursor = ''; });
  strip.addEventListener('mousemove',  e => {
    if (!isDragging) return;
    e.preventDefault();
    const x    = e.pageX - strip.offsetLeft;
    const walk = (x - startX) * 1.4;
    strip.scrollLeft = scrollLeft - walk;
  });
 
  /* ── Smooth scroll dengan easing ── */
  function smoothScrollTo(targetY, duration = 900) {
    const startY = window.scrollY;
    const diff   = targetY - startY;
    let start    = null;
 
    // Easing: easeInOutQuart — lambat awal, cepat tengah, lambat akhir
    function ease(t) {
      return t < 0.5
        ? 8 * t * t * t * t
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    }
 
    function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed  = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + diff * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    }
 
    requestAnimationFrame(step);
  }
 
  // Intercept semua anchor link di halaman ini
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const offset    = 115; // scroll-margin-top
      const targetY   = el.getBoundingClientRect().top + window.scrollY - offset;
      smoothScrollTo(targetY, 1000);
    });
  });
 
  document.querySelectorAll('.card-details').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
  });

const translations = {
    id: {
      'nav-home'            : 'Beranda',
      'nav-rental'          : 'Paket Tour & Wisata',
      'nav-gallery'         : 'Galeri',
      'gallery-label-text'  : 'Galeri Kami',
      'gallery-title'       : 'Jelajahi Galeri dan<br>Lihat Masa Depan Terungkap',
      'gallery-desc'        : 'Dari detail yang elegan hingga momen interaksi nyata, galeri ini menangkap<br>esensi dari apa yang membuat masa depan terasa nyata hari ini.',
      'gallery-cta'         : 'Jelajahi Galeri',
      'footer-desc'         : 'Di Grace Tour, Setiap Detik Merupakan Petualangan Baru dalam Kenyamanan dan Kemewahan!',
      'footer-link-title'   : 'Link',
      'footer-link-1'       : 'Daftar',
      'footer-link-2'       : 'Masuk',
      'footer-link-3'       : 'Beranda',
      'footer-link-4'       : 'Kamar',
      'footer-link-5'       : 'Profil',
      'footer-link-6'       : 'FAQ',
      'footer-tour-title'   : 'Paket Tour',
      'footer-tour-1'       : 'Standar',
      'footer-tour-2'       : 'Eksekutif',
      'footer-tour-3'       : 'Deluxe',
      'footer-tour-4'       : 'Superior',
      'footer-tour-5'       : 'Keluarga',
      'footer-tour-6'       : 'Klasik',
      'footer-contact-title': 'Kontak Kami',
      'footer-map-title'    : 'Peta',
      'footer-copy'         : '© Copyright by Grace Tour 2026. Semua hak dilindungi',
      'footer-privacy'      : 'Kebijakan Privasi',
      'footer-terms'        : 'Syarat Penggunaan',
      'footer-legal'        : 'Legal',
    },
    en: {
      'nav-home'            : 'Home',
      'nav-rental'          : 'Tour & Travel Packages',
      'nav-gallery'         : 'Gallery',
      'gallery-label-text'  : 'Our Gallery',
      'gallery-title'       : 'Explore the Gallery and<br>See the Future Unfold',
      'gallery-desc'        : 'From sleek details to real-life moments of interaction, this gallery captures<br>the essence of what makes the future feel real today.',
      'gallery-cta'         : 'Explore the Gallery',
      'footer-desc'         : 'At Grace Tour, Every Moment is a New Adventure in Comfort and Luxury!',
      'footer-link-title'   : 'Links',
      'footer-link-1'       : 'Register',
      'footer-link-2'       : 'Login',
      'footer-link-3'       : 'Home',
      'footer-link-4'       : 'Room',
      'footer-link-5'       : 'Profile',
      'footer-link-6'       : 'FAQ',
      'footer-tour-title'   : 'Tour Packages',
      'footer-tour-1'       : 'Standard',
      'footer-tour-2'       : 'Executive',
      'footer-tour-3'       : 'Deluxe',
      'footer-tour-4'       : 'Superior',
      'footer-tour-5'       : 'Family',
      'footer-tour-6'       : 'Classic',
      'footer-contact-title': 'Contact Us',
      'footer-map-title'    : 'Map',
      'footer-copy'         : '© Copyright by Grace Tour 2026. All rights reserved',
      'footer-privacy'      : 'Privacy Policy',
      'footer-terms'        : 'Terms of Use',
      'footer-legal'        : 'Legal',
    }
  };

  const htmlFields = ['gallery-title', 'gallery-desc'];
  let currentLang = 'id';

  function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    const t = translations[lang];
    document.documentElement.lang = lang;

    Object.keys(t).forEach(key => {
      const el = document.getElementById(key);
      if (!el) return;
      htmlFields.includes(key) ? (el.innerHTML = t[key]) : (el.textContent = t[key]);
    });

    document.getElementById('lang-btn-id').classList.toggle('lang-active', lang === 'id');
    document.getElementById('lang-btn-en').classList.toggle('lang-active', lang === 'en');
  }