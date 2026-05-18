// const navLinks = document.querySelectorAll('.nav-links a');

// navLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault(); // ← INI yang sering bikin active gagal

//         // Hapus active dari semua
//         navLinks.forEach(l => l.classList.remove('active'));

//         // Tambah ke yang diklik
//         this.classList.add('active');
//     });
// });

// // Default: Home aktif saat halaman pertama dibuka
// document.getElementById('nav-rental').classList.add('active');

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Hapus class active dari semua link
    navLinks.forEach((l) => l.classList.remove("active"));
    // Tambah class active ke link yang diklik
    this.classList.add("active");
  });
});

document.getElementById("nav-rentall").classList.add("active");

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
    document.getElementById("nav-rental").innerText = "Harga Rental";
    document.getElementById("nav-pickup").innerText = "Layanan Jemput";
    document.getElementById("nav-wisata").innerText = "Wisata";
    document.getElementById("nav-gallery").innerText = "Galeri";
    document.getElementById("nav-booking").innerText = "Booking";
    document.getElementById("hero-title").innerHTML =
      "Solusi Perjalanan<br>Wisata Anda";
    document.getElementById("hero-button").innerText = "Booking Sekarang";
  }

  if (lang === "en") {
    document.getElementById("nav-rental").innerText = "Rental Price";
    document.getElementById("nav-pickup").innerText = "Pickup Service";
    document.getElementById("nav-wisata").innerText = "Tour";
    document.getElementById("nav-gallery").innerText = "Gallery";
    document.getElementById("nav-booking").innerText = "Booking";
    document.getElementById("hero-title").innerHTML = "Your Travel<br>Solution";
    document.getElementById("hero-button").innerText = "Book Now";
  }
}

const translations = {
    id: {
      /* Navbar */
      'nav-home'            : 'Beranda',
      'nav-rentall'         : 'Paket Tour & Wisata',
      'nav-gallery'         : 'Galeri',
      /* Header destinasi */
      'dest-label'          : 'Tempat Terbaik yang Direkomendasikan',
      'dest-title'          : 'Destinasi Populer yang Kami Tawarkan untuk Semua',
      'dest-desc'           : 'Temukan destinasi wisata terbaik yang kami rekomendasikan khusus untuk Anda, dari pantai eksotis hingga pegunungan yang memukau.',
      /* Kartu */
      'btn-book'            : 'Pesan Sekarang',
      'days-suffix'         : 'Hari',
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
      'nav-home'            : 'Home',
      'nav-rentall'         : 'Tour & Travel Packages',
      'nav-gallery'         : 'Gallery',
      /* Header destinasi */
      'dest-label'          : 'Best Recommended Places',
      'dest-title'          : 'Popular Destination we offer for all',
      'dest-desc'           : 'Discover the best travel destinations we recommend especially for you, from exotic beaches to stunning mountains.',
      /* Kartu */
      'btn-book'            : 'Book Now',
      'days-suffix'         : 'Days',
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
 
  let currentLang = 'id';
 
  function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
 
    const t = translations[lang];
    document.documentElement.lang = lang;
 
    /* ── 1. Elemen dengan ID langsung ── */
    const htmlFields = ['dest-title', 'dest-desc'];
    Object.keys(t).forEach(key => {
      if (['btn-book', 'days-suffix'].includes(key)) return;
      const el = document.getElementById(key);
      if (!el) return;
      htmlFields.includes(key) ? (el.innerHTML = t[key]) : (el.textContent = t[key]);
    });
 
    /* ── 2. Tombol "Book Now / Pesan Sekarang" di semua kartu ── */
    document.querySelectorAll('[data-translate="btn-book"]').forEach(btn => {
      // Simpan SVG, ganti teks saja
      const svg = btn.querySelector('svg');
      btn.textContent = t['btn-book'] + ' ';
      if (svg) btn.appendChild(svg);
    });
 
    /* ── 3. Label hari "X Hari / X Days" ── */
    document.querySelectorAll('[data-translate="days"]').forEach(el => {
      const val = el.getAttribute('data-value');
      el.textContent = `${val} ${t['days-suffix']}`;
    });
 
    /* ── 4. Tombol aktif bahasa ── */
    document.getElementById('lang-btn-id').classList.toggle('lang-active', lang === 'id');
    document.getElementById('lang-btn-en').classList.toggle('lang-active', lang === 'en');
  }