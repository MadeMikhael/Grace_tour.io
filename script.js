/* ================= MENU TOGGLE ================= */
function toggleMenu(){
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
function setLanguage(lang){

    if(lang === 'id'){
        document.getElementById("nav-rental").innerText = "Harga Rental";
        document.getElementById("nav-pickup").innerText = "Layanan Jemput";
        document.getElementById("nav-wisata").innerText = "Wisata";
        document.getElementById("nav-gallery").innerText = "Galeri";
        document.getElementById("nav-booking").innerText = "Booking";
        document.getElementById("hero-title").innerHTML = "Solusi Perjalanan<br>Wisata Anda";
        document.getElementById("hero-button").innerText = "Booking Sekarang";
    }

    if(lang === 'en'){
        document.getElementById("nav-rental").innerText = "Rental Price";
        document.getElementById("nav-pickup").innerText = "Pickup Service";
        document.getElementById("nav-wisata").innerText = "Tour";
        document.getElementById("nav-gallery").innerText = "Gallery";
        document.getElementById("nav-booking").innerText = "Booking";
        document.getElementById("hero-title").innerHTML = "Your Travel<br>Solution";
        document.getElementById("hero-button").innerText = "Book Now";
    }

}

const track      = document.getElementById('track');
  const arrowLeft  = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');
  const dotsEl     = document.getElementById('dots');

  let currentIndex = 0;

  function getVisible() {
    const w = track.parentElement.offsetWidth;
    if (w <= 560)  return 1;
    if (w <= 900)  return 2;
    return 4;
  }

  const cards      = Array.from(track.children);
  const totalCards = cards.length;

  function maxIndex() { return totalCards - getVisible(); }

  /* Build dots */
  function buildDots() {
    dotsEl.innerHTML = '';
    const count = maxIndex() + 1;
    for (let i = 0; i < count; i++) {
      const d = document.createElement('button');
      d.className = 'dot' + (i === currentIndex ? ' active' : '');
      d.setAttribute('aria-label', `Slide ${i + 1}`);
      d.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(d);
    }
  }

  function updateDots() {
    dotsEl.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex);
    });
  }

  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, maxIndex()));

    const cardWidth = cards[0].offsetWidth;
    const gap       = 16;
    const offset    = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    arrowLeft.classList.toggle('hidden', currentIndex === 0);
    arrowRight.classList.toggle('hidden', currentIndex >= maxIndex());

    updateDots();
  }

  arrowLeft.addEventListener('click',  () => goTo(currentIndex - 1));
  arrowRight.addEventListener('click', () => goTo(currentIndex + 1));

  /* Touch / swipe */
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(currentIndex + (diff > 0 ? 1 : -1));
  });

  /* Init & resize */
  function init() {
    buildDots();
    goTo(currentIndex);
  }

  window.addEventListener('resize', () => {
    currentIndex = Math.min(currentIndex, maxIndex());
    buildDots();
    goTo(currentIndex);
  });

  init();

  // ── Build dot grid ──────────────────────────────────────────
  (function () {
    const grid = document.getElementById('dotGrid');
    const rows = 4, cols = 6;
    // accent positions (row, col) zero-indexed
    const accents      = new Set(['1-2', '2-4']);
    const accentsRed   = new Set(['0-5']);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const span = document.createElement('span');
        const key = `${r}-${c}`;
        if (accents.has(key))    span.classList.add('accent');
        if (accentsRed.has(key)) span.classList.add('accent-red');
        grid.appendChild(span);
      }
    }
  })();

  // ── Subtle tilt on hover ────────────────────────────────────
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-8px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // const btn      = document.getElementById('subscribeBtn');
  // const input    = document.getElementById('emailInput');
  // const success  = document.getElementById('successMsg');

  // btn.addEventListener('click', () => {
  //   const email = input.value.trim();

  //   // Basic email validation
  //   const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  //   if (!valid) {
  //     input.style.borderColor = '#ef4444';
  //     input.focus();
  //     return;
  //   }

  //   input.style.borderColor = '#16a34a';
  //   btn.textContent = '✓ Subscribed!';
  //   btn.style.background = '#4ade80';
  //   btn.disabled = true;
  //   success.style.display = 'block';

  //   // Reset after 4 seconds
  //   setTimeout(() => {
  //     input.value = '';
  //     input.style.borderColor = '';
  //     btn.innerHTML = `Subscribe <svg viewBox="0 0 16 16" style="width:14px;height:14px;stroke:#111827;stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>`;
  //     btn.style.background = '';
  //     btn.disabled = false;
  //     success.style.display = 'none';
  //   }, 4000);
  // });

  // // Reset border on type
  // input.addEventListener('input', () => {
  //   input.style.borderColor = '';
  // });

  // // Allow Enter key
  // input.addEventListener('keydown', e => {
  //   if (e.key === 'Enter') btn.click();
  // });

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Hapus class active dari semua link
        navLinks.forEach(l => l.classList.remove('active'));
        // Tambah class active ke link yang diklik
        this.classList.add('active');
    });
});

document.getElementById('nav-home').classList.add('active');

 /* ─────────────────────────────────────────
     TERJEMAHAN LENGKAP — ID & EN
  ───────────────────────────────────────── */
  const translations = {
    id: {
      /* Navbar */
      'nav-home'          : 'Beranda',
      'nav-rental'        : 'Paket Tour & Wisata',
      'nav-gallery'       : 'Galeri',
      /* Hero */
      'hero-title'        : 'Solusi Perjalanan<br>Wisata Anda',
      'hero-button'       : 'Booking Sekarang',
      /* Services */
      'svc-label'         : 'Kategori',
      'svc-title'         : 'Kami Menawarkan Layanan Terbaik',
      'svc-card1-title'   : 'Cuaca Terkini',
      'svc-card1-desc'    : 'Informasi cuaca terkini untuk perjalanan wisata Anda yang aman dan nyaman.',
      'svc-card2-title'   : 'Trip Terbaik',
      'svc-card2-desc'    : 'Paket perjalanan terbaik yang dirancang khusus untuk kepuasan Anda.',
      'svc-card3-title'   : 'Event Lokal',
      'svc-card3-desc'    : 'Nikmati berbagai event dan budaya lokal yang memukau di setiap destinasi.',
      'svc-card4-title'   : 'Kustomisasi',
      'svc-card4-desc'    : 'Kami menyediakan layanan wisata yang sepenuhnya disesuaikan kebutuhan Anda.',
      /* Carousel */
      'carousel-title'    : 'Temukan destinasi paling populer kami!',
      'btn-view'          : 'Lihat',
      /* Newsletter */
      'newsletter-title'  : 'Temukan Perjalanan Wisata Anda dengan Grace Tour & Travel',
      'badge1'            : 'Penawaran Wisata Terbaik',
      'badge2'            : 'Promosi Eksklusif',
      'badge3'            : 'Tips Perjalanan Ahli',
      'email-placeholder' : 'Masukkan Email Anda',
      'subscribe-btn-text': 'Booking',
      'successMsg'        : '✓ Berhasil berlangganan! Selamat datang di Grace Tour & Travel.',
      /* Footer */
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
      /* Navbar */
      'nav-home'          : 'Home',
      'nav-rental'        : 'Tour & Travel Packages',
      'nav-gallery'       : 'Gallery',
      /* Hero */
      'hero-title'        : 'Your Travel<br>Journey Solution',
      'hero-button'       : 'Book Now',
      /* Services */
      'svc-label'         : 'Category',
      'svc-title'         : 'We Offer Best Services',
      'svc-card1-title'   : 'Calculated Weather',
      'svc-card1-desc'    : 'Up-to-date weather information for your safe and comfortable travel.',
      'svc-card2-title'   : 'Best Trip',
      'svc-card2-desc'    : 'The best travel packages specially designed for your satisfaction.',
      'svc-card3-title'   : 'Local Events',
      'svc-card3-desc'    : 'Enjoy various stunning local events and culture at every destination.',
      'svc-card4-title'   : 'Customization',
      'svc-card4-desc'    : 'We provide tourism services fully tailored to your needs.',
      /* Carousel */
      'carousel-title'    : 'Discover our most popular destinations!',
      'btn-view'          : 'View',
      /* Newsletter */
      'newsletter-title'  : 'Find Your Travel Journey with Grace Tour & Travel',
      'badge1'            : 'The Best Travel Deals',
      'badge2'            : 'Exclusive Promotions',
      'badge3'            : 'Expert Travel Tips',
      'email-placeholder' : 'Enter Your Email',
      'subscribe-btn-text': 'Booking',
      'successMsg'        : "✓ You're subscribed! Welcome to Grace Tour & Travel.",
      /* Footer */
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
 
  /* elemen yang pakai innerHTML (boleh ada <br>) */
  const htmlFields = ['hero-title', 'newsletter-title'];
 
  /* elemen yang pakai placeholder */
  const placeholderFields = { 'emailInput': 'email-placeholder' };
 
  let currentLang = 'id';
 
  function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
 
    const t = translations[lang];
    document.documentElement.lang = lang;
 
    /* ── 1. Elemen dengan id langsung ── */
    Object.keys(t).forEach(key => {
      /* skip placeholder, ditangani sendiri */
      if (Object.values(placeholderFields).includes(key)) return;
      /* skip btn-view, ditangani lewat data-translate */
      if (key === 'btn-view') return;
 
      const el = document.getElementById(key);
      if (!el) return;
 
      if (htmlFields.includes(key)) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    });
 
    /* ── 2. Placeholder input ── */
    Object.entries(placeholderFields).forEach(([elId, tKey]) => {
      const el = document.getElementById(elId);
      if (el) el.placeholder = t[tKey];
    });
 
    /* ── 3. data-translate="btn-view" (semua tombol View/Lihat) ── */
    document.querySelectorAll('[data-translate="btn-view"]').forEach(el => {
      el.textContent = t['btn-view'];
    });
 
    /* ── 4. Tombol aktif navbar bahasa ── */
    document.getElementById('lang-btn-id').classList.toggle('lang-active', lang === 'id');
    document.getElementById('lang-btn-en').classList.toggle('lang-active', lang === 'en');
  }