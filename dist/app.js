const A = "/assets/";
const properties = [
  {
    slug: "ruang-senja",
    name: "Ruang Senja",
    year: "2026",
    place: "Jakarta",
    area: "—",
    time: "—",
    image: "residence-living.webp",
    gallery: [
      "residence-living.webp",
      "gallery-plan.webp",
      "gallery-studio.webp",
      "gallery-suite.webp",
      "gallery-courtyard.webp",
    ],
    subtitle: "Ruang tinggal dengan suasana hangat dan tenang.",
    description:
      "Studi visual tentang bagaimana cahaya sore, material alami, dan proporsi dapat membuat ruang keluarga terasa lebih dekat. Ini adalah konsep ilustratif, bukan properti yang tersedia.",
  },
  {
    slug: "rumah-antara",
    name: "Rumah Antara",
    year: "2026",
    place: "Indonesia",
    area: "—",
    time: "—",
    image: "residence-bedroom.webp",
    gallery: [
      "residence-bedroom.webp",
      "gallery-suite.webp",
      "gallery-stair.webp",
      "residence-bath.webp",
      "gallery-plan.webp",
    ],
    subtitle: "Privasi yang bertemu dengan keterbukaan.",
    description:
      "Sebuah gagasan hunian yang menyeimbangkan area pribadi dan area berkumpul melalui transisi ruang yang lembut. Seluruh visual dan informasi merupakan contoh.",
  },
  {
    slug: "teras-cahaya",
    name: "Teras Cahaya",
    year: "2026",
    place: "Indonesia",
    area: "—",
    time: "—",
    image: "residence-pool.webp",
    gallery: [
      "residence-pool.webp",
      "gallery-courtyard.webp",
      "gallery-lounge.webp",
      "residence-kitchen.webp",
      "gallery-stair.webp",
    ],
    subtitle: "Dialog antara interior dan lanskap.",
    description:
      "Konsep ruang yang memberi alam peran utama: bayangan, pantulan air, dan bukaan yang membawa ritme ke dalam keseharian. Bukan proyek atau listing nyata.",
  },
  {
    slug: "rumah-sela",
    name: "Rumah Sela",
    year: "2026",
    place: "Indonesia",
    area: "—",
    time: "—",
    image: "residence-kitchen.webp",
    gallery: [
      "residence-kitchen.webp",
      "gallery-lounge.webp",
      "gallery-studio.webp",
      "gallery-plan.webp",
      "residence-bath.webp",
    ],
    subtitle: "Detail kecil yang memberi ruang untuk hidup.",
    description:
      "Eksplorasi fungsi, alur gerak, dan material pada rumah kontemporer yang bersahaja. Visual ditampilkan sebagai ilustrasi desain.",
  },
  {
    slug: "ruang-teduh",
    name: "Ruang Teduh",
    year: "2026",
    place: "Indonesia",
    area: "—",
    time: "—",
    image: "residence-bath.webp",
    gallery: [
      "residence-bath.webp",
      "gallery-stair.webp",
      "residence-bedroom.webp",
      "gallery-courtyard.webp",
      "residence-living.webp",
    ],
    subtitle: "Sederhana, hening, dan terukur.",
    description:
      "Sebuah studi atmosfer melalui tekstur batu, pencahayaan lembut, dan ketenangan bidang. Tidak mewakili properti atau klien nyata.",
  },
];
const articles = [
  {
    slug: "merancang-ruang-yang-bernapas",
    title: "Merancang ruang yang bernapas",
    image: "residence-living.webp",
    category: "Perspektif",
    body: [
      "Rumah yang baik memberi ruang untuk bergerak, berhenti, dan bernapas. Bukan sekadar ukuran, tetapi bagaimana setiap bagian berhubungan dengan bagian lain.",
      "Melalui skala, cahaya, dan material, sebuah ruang bisa terasa lapang tanpa kehilangan rasa akrab. Artikel ini adalah materi contoh untuk rancangan situs Leak Properti.",
    ],
  },
  {
    slug: "cahaya-sebagai-material",
    title: "Cahaya sebagai material",
    image: "residence-kitchen.webp",
    category: "Desain",
    body: [
      "Cahaya bukan sesuatu yang ditambahkan terakhir. Ia menentukan karakter permukaan, mengungkap tekstur, dan membentuk suasana sepanjang hari.",
      "Penempatan bukaan dan pilihan material dapat membuat cahaya menjadi bagian dari pengalaman ruang. Artikel ini bersifat ilustratif.",
    ],
  },
  {
    slug: "rumah-yang-terasa-utuh",
    title: "Rumah yang terasa utuh",
    image: "residence-pool.webp",
    category: "Hunian",
    body: [
      "Kenyamanan muncul saat fungsi, komposisi, dan suasana bergerak ke arah yang sama. Keputusan kecil yang konsisten sering memberi dampak terbesar.",
      "Di sini kami membayangkan sebuah pendekatan yang menempatkan kehidupan sehari-hari sebagai titik awal. Konten ini adalah contoh, bukan uraian layanan atau proyek nyata.",
    ],
  },
];
const articleDetails = {
  "merancang-ruang-yang-bernapas": [
    [
      "01 / Mulai dari keseharian",
      "Sebelum memilih bentuk dan warna, bayangkan urutan aktivitas sehari-hari. Jalur masuk, tempat menyimpan barang, dan ruang berkumpul membentuk ritme rumah.",
    ],
    [
      "02 / Sisakan ruang kosong",
      "Tidak semua bidang harus diisi. Ruang kosong memberi jeda visual sekaligus membuat pergerakan lebih leluasa.",
    ],
    [
      "03 / Bukaan yang bermakna",
      "Bukaan dapat menghubungkan ruang dengan halaman, mengarahkan pandangan, dan memberi pergantian cahaya sepanjang hari.",
    ],
    [
      "04 / Material yang terasa dekat",
      "Tekstur alami memberi kedalaman tanpa perlu banyak dekorasi. Pilihan material sebaiknya mempertimbangkan sentuhan, perawatan, dan cahaya.",
    ],
    [
      "05 / Menyatukan pengalaman",
      "Ketika alur, material, dan pencahayaan memiliki arah yang sama, rumah terasa utuh tanpa perlu menjelaskan alasannya.",
    ],
  ],
  "cahaya-sebagai-material": [
    [
      "01 / Ritme pagi",
      "Cahaya pagi bisa menjadikan area tertentu terasa aktif dan terbuka. Memahami arahnya membantu menentukan fungsi setiap sudut.",
    ],
    [
      "02 / Bayangan sebagai lapisan",
      "Bayangan menambah kedalaman pada bidang sederhana. Kisi, tanaman, dan permukaan bertekstur dapat membentuk komposisi yang terus berubah.",
    ],
    [
      "03 / Bukaan dan orientasi",
      "Ukuran bukaan bukan satu-satunya pertimbangan. Orientasi dan perlindungan dari panas berperan besar pada kenyamanan ruang.",
    ],
    [
      "04 / Warna permukaan",
      "Permukaan terang memantulkan cahaya berbeda dari material gelap. Keduanya dapat dipakai untuk menata fokus dan suasana.",
    ],
    [
      "05 / Cahaya malam",
      "Lapisan cahaya buatan memberi pilihan antara aktivitas, istirahat, dan suasana akrab. Tidak semua ruang membutuhkan terang yang sama.",
    ],
  ],
  "rumah-yang-terasa-utuh": [
    [
      "01 / Hubungan antarruang",
      "Kesatuan dimulai dari cara ruang berhubungan: kapan terbuka, kapan tertutup, dan bagaimana seseorang bergerak di antaranya.",
    ],
    [
      "02 / Satu bahasa material",
      "Pengulangan material yang terukur menciptakan hubungan tanpa menjadikan semua ruang identik.",
    ],
    [
      "03 / Detail pertemuan",
      "Pertemuan dinding, lantai, furnitur, dan cahaya sering menentukan apakah ruang terasa tenang atau ramai.",
    ],
    [
      "04 / Ruang untuk berubah",
      "Rumah yang baik memberi kemungkinan untuk kebiasaan baru. Furnitur dan tata ruang dapat dirancang agar mudah beradaptasi.",
    ],
    [
      "05 / Yang tersisa di ingatan",
      "Pada akhirnya, kualitas rumah tidak hanya dilihat. Ia hadir dalam kebiasaan kecil dan rasa nyaman yang berulang.",
    ],
  ],
};
function img(name, alt = "", cls = "") {
  return `<img class="${cls}" src="${A + name}" alt="${alt}" loading="lazy" onerror="this.style.opacity='0'">`;
}
function header(light = false) {
  return `<header class="topbar ${light ? "light" : "dark"}" id="topbar"><button class="navbtn" id="menuBtn" aria-expanded="false" aria-label="Buka menu"><i></i><span>Menu</span></button><a href="/" class="wordmark" aria-label="Leak Properti, beranda">LEAK PROPERTI</a><button class="callbtn" data-call>Jadwalkan panggilan</button></header>`;
}
function overlays() {
  return `<div class="overlay" id="menuOverlay" aria-hidden="true"><div class="menu-inner"><nav class="menu-links" aria-label="Navigasi utama"><a href="/#komposisi">Tentang</a><a href="/projects/">Proyek</a><a href="/#pendekatan">Pendekatan</a><a href="/blog/">Jurnal</a><a href="/#kontak">Kontak</a></nav></div></div><div class="modal" id="callModal" aria-hidden="true"><div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="callTitle"><button class="close" id="callClose" aria-label="Tutup">×</button><div class="eyebrow">[ Jadwalkan panggilan ]</div><h2 class="serif" id="callTitle">Percakapan dimulai di sini.</h2><p>Kalender pemesanan belum terhubung karena informasi kontak resmi Leak Properti belum tersedia. Tidak ada janji yang dapat dijadwalkan melalui situs contoh ini.</p><button class="submit" id="callGotIt">Mengerti</button></div></div><div class="modal" id="contactModal" aria-hidden="true"><div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="contactTitle"><button class="close" id="modalClose" aria-label="Tutup">×</button><div class="eyebrow">[ Kontak ]</div><h2 class="serif" id="contactTitle">Mulai dengan percakapan.</h2><p>Ini adalah rancangan situs contoh. Belum ada alamat email atau nomor kontak resmi untuk Leak Properti.</p><form class="formgrid" id="contactForm"><label>Nama<input name="name" required placeholder="Nama Anda"></label><label>Email<input name="email" type="email" required placeholder="nama@contoh.com"></label><label>Pesan<textarea name="message" rows="3" placeholder="Ceritakan kebutuhan Anda"></textarea></label><p class="note">Formulir demonstrasi ini tidak mengirim atau menyimpan data. Jangan masukkan informasi pribadi yang sensitif.</p><button class="submit" type="submit">Lihat konfirmasi demo ↗</button></form><p id="formMessage" class="note" role="status"></p></div></div><div class="cookie-banner" id="cookieBanner"><span>Prototipe ini tidak memakai analitik atau kuki pelacakan. Pilihan ini disimpan secara lokal di browser. <a href="/documents/cookie-policy/">Info kuki</a></span><button id="cookieAccept">Mengerti</button></div>`;
}
function footer() {
  return `<footer class="footer-cta" id="kontak"><div class="eyebrow">[ Hubungi kami ]</div><h2 class="serif reveal">Setiap ruang dimulai dari percakapan.</h2><button class="textlink" data-contact style="color:inherit;background:none;border-top:0;border-left:0;border-right:0">Mulai percakapan</button><div class="footer-bottom"><div>LEAK PROPERTI<br><span style="opacity:.6">Situs konsep · Konten ilustratif</span></div><nav><a href="/#komposisi">Tentang</a><a href="/projects/">Proyek</a><a href="/#pendekatan">Pendekatan</a><a href="/blog/">Jurnal</a><a href="/#kontak">Kontak</a></nav><div style="text-align:right"><a href="#top">Kembali ke atas ↑</a><br><a href="/documents/privacy-policy/">Privasi</a> · <a href="/documents/terms-of-service/">Ketentuan</a> · <a href="/documents/cookie-policy/">Kuki</a><br>© Leak Properti 2026</div></div><div class="footmark">LEAK PROPERTI</div></footer>`;
}
function feature(n, title, desc, image) {
  return `<div class="feature reveal"><span class="num">0${n}</span>${img(image, title)}<h3>${title}</h3><p>${desc}</p></div>`;
}
function articleCard(a) {
  return `<a class="article-card reveal" href="/blog/${a.slug}/"><div class="image-wrap">${img(a.image, a.title)}</div><div class="eyebrow" style="margin-top:20px">${a.category} · Bacaan contoh</div><h3 class="serif">${a.title}</h3><span class="textlink">Baca artikel</span></a>`;
}
function preloader() {
  return `<div class="preloader" id="preloader" aria-label="Memuat pengalaman Leak Properti"><div class="preloader-stack">${["gallery-courtyard.webp", "gallery-lounge.webp", "residence-bedroom.webp", "gallery-stair.webp", "residence-kitchen.webp", "residence-pool.webp", "gallery-suite.webp"].map((n, i) => `<div class="preloader-card preloader-card-${i + 1}">${img(n, "")}</div>`).join("")}</div><div class="preloader-title serif">LEAK PROPERTI</div><img class="preloader-center" src="${A}hero-villa.webp" alt=""></div>`;
}
function home() {
  return `${preloader()}${header(true)}<main id="top"><section class="hero"><video autoplay muted loop playsinline poster="${A}hero-interior-poster.jpg"><source src="${A}hero-interior.mp4" type="video/mp4"></video><div class="hero-content"><div class="script">Ruang × Rancangan × Pengalaman</div><h1 class="serif">Ruang yang<br>dirancang utuh.</h1><p>Konsep hunian yang menyatukan fungsi, rasa, dan detail.</p></div><div class="hero-side"><span>Ruang</span><span>Desain</span><span>Pengalaman</span></div><a class="scrollcue" href="#komposisi">Gulir untuk menjelajah</a></section><section class="section page-pad" id="komposisi"><div class="sectionhead reveal"><span class="eyebrow">[ 01 / Komposisi ]</span><h2 class="serif">Sebuah rumah<br>adalah komposisi.</h2></div><div class="introcopy"><p class="lead">Dalam ruang yang dirancang baik, tidak ada yang terasa kebetulan. Garis, material, dan cahaya memiliki tempatnya.</p><div class="body"><p>Proporsi, material, dan cahaya dipertimbangkan bersama agar setiap bagian terasa menyatu.</p></div></div><div class="composition-tiles">${properties.map((p, i) => `<a class="composition-tile" href="/projects/${p.slug}/" aria-label="Lihat ${p.name}">${img(p.image, p.name)}<span>Lihat ↗</span></a>`).join("")}</div></section><section class="projects-home"><div class="page-pad projects-top reveal"><div><div class="eyebrow">[ 02 / Eksplorasi ]</div><h2 class="serif">Ruang pilihan.</h2></div><a class="textlink" href="/projects/">Lihat semua konsep</a></div><div class="project-show"><a class="project-photo" id="showImageLink" href="/projects/ruang-senja/">${img(properties[0].image, properties[0].name, "showImage")}</a><div class="project-info"><div class="eyebrow">[ Studi ruang / Ilustratif ]</div><h3 class="serif" id="showTitle">${properties[0].name.replace(" ", "<br>")}</h3><div class="stats"><div><small>Tahun konsep</small><strong id="showYear">2026</strong></div><div><small>Luas</small><strong>—</strong></div><div><small>Lokasi</small><strong id="showPlace">Jakarta</strong></div></div><a class="textlink" id="showLink" href="/projects/ruang-senja/">Jelajahi konsep</a><a class="textlink" id="showAllLink" href="/projects/">Semua konsep</a><div class="project-controls"><div class="rounds"><button class="round" id="prevProject" aria-label="Konsep sebelumnya">←</button><button class="round" id="nextProject" aria-label="Konsep berikutnya">→</button></div><span class="counter" id="projectCount">01 / 05</span></div><div class="project-progress"><i id="progressFill"></i></div></div></div></section><section class="section page-pad delivery" id="pendekatan"><div class="split-title reveal"><h2 class="serif">Proses yang jelas.<br>Ruang yang tenang.</h2><div><div class="eyebrow">[ 03 / Pendekatan ]</div><p>Setiap keputusan ruang sebaiknya punya alasan — dari kebutuhan sehari-hari hingga suasana yang ingin dirasakan.</p></div></div><div class="four-grid">${feature(1, "Mendengar dahulu", "Memahami kebiasaan, prioritas, dan harapan sebelum menggambar solusi.", "residence-living.webp")}${feature(2, "Menyusun arah", "Menghubungkan tata ruang, material, dan cahaya dalam satu bahasa desain.", "gallery-studio.webp")}${feature(3, "Meninjau detail", "Menguji setiap pilihan agar fungsi dan estetika saling menguatkan.", "gallery-plan.webp")}${feature(4, "Menjaga kesatuan", "Mempertahankan gagasan utama hingga semua elemen terasa selaras.", "residence-bedroom.webp")}</div></section><section class="section page-pad services"><div class="service-stage"><div class="eyebrow reveal">[ 04 / Lapisan ruang ]</div><h2 class="serif reveal">Pemikiran arsitektur.<br>Kepekaan desain.<br>Pengalaman hidup.</h2><div class="service-track">${[
    [
      "01",
      "Arsitektur",
      "Menyusun alur dan proporsi agar aktivitas sehari-hari mengalir.",
      "gallery-plan.webp",
    ],
    [
      "02",
      "Desain",
      "Memilih material, warna, dan tekstur yang bekerja bersama.",
      "residence-kitchen.webp",
    ],
    [
      "03",
      "Pelaksanaan",
      "Menjaga gagasan ruang tetap utuh hingga detail akhir.",
      "gallery-studio.webp",
    ],
  ]
    .map(
      (v) =>
        `<div class="service-row reveal"><span>${v[0]}</span><h3 class="serif">${v[1]}</h3><p>${v[2]}</p><div class="service-media ${v[0] === "02" ? "collage" : ""}">${v[0] === "02" ? ["residence-kitchen.webp", "gallery-suite.webp", "gallery-lounge.webp", "residence-bath.webp", "gallery-courtyard.webp"].map((n) => img(n, "Ilustrasi desain")).join("") : img(v[3], v[1])}</div></div>`,
    )
    .join(
      "",
    )}</div></div></section><section class="about" id="tentang"><div class="about-grid"><div class="page-pad section"><div class="eyebrow">[ 05 / Tentang ]</div><h2 class="serif reveal">Tentang<br>cara kami<br>melihat ruang.</h2>${img("residence-pool.webp", "Ruang hunian ilustratif")}</div><div class="about-copy"><span class="sample-label">Identitas konsep</span><p class="reveal">Leak Properti hadir di sini sebagai identitas rancangan untuk mengeksplorasi rumah yang terasa nyaman, terukur, dan personal.</p><p class="micro reveal">Belum ada riwayat proyek, tim, testimoni, atau statistik perusahaan yang diberikan. Karena itu, seluruh contoh dalam situs ini diberi label ilustratif.</p><a class="textlink" href="/projects/">Lihat eksplorasi ruang</a></div></div></section><div class="marquee"><span class="marquee-track">RUANG · CAHAYA · MATERIAL · PROPORSI · RUANG · CAHAYA · MATERIAL · PROPORSI · </span></div><section class="section page-pad journal"><div class="projects-top"><div><div class="eyebrow">[ 06 / Jurnal ]</div><h2 class="serif">Catatan ruang.</h2></div><a class="textlink" href="/blog/">Semua artikel</a></div><div class="cards">${articles.map(articleCard).join("")}</div></section><section class="principles page-pad"><div class="eyebrow">[ Prinsip rancangan ]</div><div class="principle-grid"><div><strong class="serif">01</strong><span>Proporsi</span></div><div><strong class="serif">02</strong><span>Cahaya</span></div><div><strong class="serif">03</strong><span>Material</span></div><div><strong class="serif">04</strong><span>Detail</span></div></div></section><section class="concept-story"><div>${img("gallery-studio.webp", "Ilustrasi proses rancangan ruang")}</div><div class="concept-story-copy"><div class="eyebrow">[ Di balik konsep ]</div><h2 class="serif">Ruang yang berbicara pelan.</h2><p>Belum ada informasi pendiri atau tim untuk ditampilkan. Bagian ini menjadi catatan mengenai gagasan yang menghubungkan setiap eksplorasi dalam situs konsep ini: rumah sebaiknya menyisakan ruang untuk hidup.</p><span class="sample-label">Bukan profil pendiri nyata</span></div></section><section class="section page-pad faq"><div class="faq-grid"><div><div class="eyebrow">[ 07 / Pertanyaan ]</div><h2 class="serif reveal">Hal yang<br>perlu diketahui.</h2></div><div>${[
    [
      "Apakah ruang yang ditampilkan tersedia untuk dibeli?",
      "Tidak. Semua ruang dan visual di situs konsep ini adalah ilustrasi, bukan daftar properti aktif.",
    ],
    [
      "Apakah formulir kontak sudah terhubung?",
      "Belum. Formulir hanya memperlihatkan perilaku antarmuka dan tidak mengirimkan data.",
    ],
    [
      "Apakah Leak Properti menawarkan layanan desain?",
      "Layanan resmi belum diberikan dalam brief. Teks di halaman ini menggambarkan konsep dan pendekatan visual, bukan penawaran layanan terverifikasi.",
    ],
    [
      "Apakah foto-foto di sini dokumentasi properti?",
      "Tidak. Gambar arsitektur dihasilkan khusus untuk prototipe ini dan tidak mewakili bangunan nyata.",
    ],
    [
      "Bisakah saya menjadwalkan panggilan dari situs ini?",
      "Belum. Kalender resmi belum terhubung. Tombol panggilan menjelaskan status tersebut.",
    ],
    [
      "Apakah lokasi dan luas setiap ruang sudah pasti?",
      "Tidak. Lokasi hanya penanda contoh dan luas tidak dicantumkan karena tidak ada data properti nyata.",
    ],
    [
      "Apakah artikel merupakan publikasi resmi?",
      "Belum. Ketiga artikel adalah konten contoh untuk memperlihatkan tata letak dan navigasi jurnal.",
    ],
    [
      "Apakah ada harga yang bisa saya lihat?",
      "Tidak. Belum ada listing nyata atau harga yang dapat diverifikasi.",
    ],
    [
      "Siapa yang membuat visual di situs ini?",
      "Visual arsitektur dibuat khusus sebagai ilustrasi untuk prototipe.",
    ],
    [
      "Bisakah konsep ini diterapkan pada rumah saya?",
      "Bagian situs ini belum merupakan penawaran jasa. Informasi layanan harus dikonfirmasi oleh pemilik merek.",
    ],
    [
      "Apakah ada testimoni klien?",
      "Tidak. Kami tidak menampilkan testimoni tanpa sumber nyata.",
    ],
    [
      "Apakah saya bisa mengunduh rencana lantai?",
      "Belum. Tidak ada denah proyek nyata yang disediakan.",
    ],
    [
      "Apakah ada akun media sosial resmi?",
      "Belum ada tautan akun yang diverifikasi dalam brief.",
    ],
    [
      "Kapan detail perusahaan tersedia?",
      "Informasi resmi dapat ditambahkan setelah disediakan dan disetujui pemilik merek.",
    ],
  ]
    .map(
      (q, i) =>
        `<div class="faq-item ${i > 6 ? "faq-more" : ""}"><button class="faq-q" aria-expanded="false"><span>${String(i + 1).padStart(2, "0")} / ${q[0]}</span><span>+</span></button><div class="faq-a"><p>${q[1]}</p></div></div>`,
    )
    .join(
      "",
    )}<button class="faq-show" id="faqShow">Lihat pertanyaan lain ↓</button></div></div></section></main>${footer()}${overlays()}`;
}

function projectsPage() {
  return `${header()}<main id="top" class="projects-page"><div class="pagehero"><a class="eyebrow" href="/">← Beranda</a><h1 class="serif">Proyek. <span>+05</span></h1><p class="micro">Eksplorasi visual · Seluruh gambar dan rincian adalah ilustrasi, bukan proyek atau listing nyata.</p></div><div class="listing">${properties.map((p, i) => `<div class="listing-row reveal"><div><div class="eyebrow">0${i + 1} / ${p.year} · Studi konsep</div><h2 class="serif">${p.name}</h2><p class="micro">${p.subtitle}</p><div class="listing-meta"><span>Lokasi ilustratif: ${p.place}</span><span>Detail belum tersedia</span></div><a class="textlink" style="margin-top:45px" href="/projects/${p.slug}/">Lihat detail</a></div><div class="listing-gallery"><div class="swiper project-swiper"><div class="swiper-wrapper">${p.gallery.map((n) => `<a class="swiper-slide image-wrap" href="/projects/${p.slug}/">${img(n, p.name)}</a>`).join("")}</div></div><div class="gallery-buttons"><button class="round gallery-prev" data-gallery="${i}" aria-label="Gambar sebelumnya untuk ${p.name}">←</button><span class="gallery-count">01 / 05</span><button class="round gallery-next" data-gallery="${i}" aria-label="Gambar berikutnya untuk ${p.name}">→</button></div></div></div>`).join("")}</div></main>${footer()}${overlays()}`;
}
function detailPage(p) {
  let imgs = p.gallery;
  let title = p.name.split(" ").join("<br>");
  return `${header()}<main id="top"><div class="detail-page-intro"><div class="detail-page-text"><a class="eyebrow" href="/projects/">← Semua proyek</a><div class="detail-year"><small>Tahun</small><strong class="serif">’26</strong></div><h1 class="serif">${title}</h1><div class="detail-metrics"><span>Lokasi contoh<br>${p.place}</span><span>Status<br>Konsep ilustratif</span><span>Luas<br>—</span><span>Waktu<br>—</span></div><div class="detail-narrative"><div><span class="eyebrow">Gagasan:</span><p>${p.subtitle}</p></div><div><span class="eyebrow">Tujuan:</span><p>Membayangkan hunian yang menyatukan fungsi, proporsi, dan suasana tanpa kehilangan karakter sehari-hari.</p></div><div><span class="eyebrow">Eksplorasi:</span><p>${p.description}</p></div></div><span class="sample-label">Bukan proyek atau properti nyata</span></div><div class="detail-side-image">${img(p.image, p.name)}</div></div><div class="detail-hero">${img(p.image, p.name)}<h2 class="serif">${p.name}</h2></div><div class="detail-intro"><div class="eyebrow">[ Cerita ruang ]<p class="micro">Seluruh visual adalah ilustrasi dan tidak mewakili properti nyata.</p></div><p class="serif">${p.description}</p></div><div class="detail-grid">${imgs
    .slice(1)
    .map((n, i) => img(n, `${p.name} — visual ilustratif ${i + 1}`))
    .join(
      "",
    )}</div><section class="detail-plan page-pad"><div class="eyebrow">[ Studi bentuk · ilustrasi ]</div><h2 class="serif">Ritme ruang,<br>dari atas.</h2>${img("gallery-plan.webp", "Denah ilustratif, bukan dokumen proyek")}</section><section class="detail-editorial page-pad"><div><div class="eyebrow">[ Material & cahaya ]</div><h2 class="serif">Setiap elemen punya tempat.</h2><p>${p.description}</p></div>${img("gallery-studio.webp", "Ilustrasi eksplorasi material")}</section><div class="detail-mosaic page-pad">${["gallery-courtyard.webp", "gallery-suite.webp", "gallery-lounge.webp", "gallery-stair.webp", "residence-kitchen.webp", "residence-bath.webp"].map((n, i) => img(n, `Studi visual ilustratif ${i + 1}`)).join("")}</div><section class="related section page-pad"><div class="eyebrow">[ Lanjutkan ]</div><h2 class="serif">Lebih banyak ruang.</h2><div class="related-grid">${properties
    .filter((x) => x.slug !== p.slug)
    .slice(0, 3)
    .map(
      (x) =>
        `<a href="/projects/${x.slug}/">${img(x.image, x.name)}<span class="eyebrow">Studi konsep · Ilustratif</span><h3 class="serif">${x.name}</h3></a>`,
    )
    .join(
      "",
    )}</div><a class="textlink" href="/projects/">Semua konsep</a></section></main>${footer()}${overlays()}`;
}
function blogPage() {
  return `${header()}<main id="top" class="blog-page"><div class="pagehero"><a class="eyebrow" href="/">← Beranda</a><h1 class="serif">Jurnal. <span style="font-size:.55em;vertical-align:top">+03</span></h1><p class="micro">Catatan dan perspektif contoh tentang ruang dan hunian.</p></div><div class="article-list">${articles.map((a, i) => `<a class="article-row reveal" href="/blog/${a.slug}/"><div class="eyebrow">0${i + 1} / ${a.category}<br>Artikel contoh</div><h2 class="serif">${a.title}</h2>${img(a.image, a.title)}<span class="article-list-link">Baca artikel</span></a>`).join("")}</div></main>${footer()}${overlays()}`;
}
function articlePage(a) {
  let idx = articles.findIndex((x) => x.slug === a.slug),
    prev = articles[(idx + articles.length - 1) % articles.length],
    next = articles[(idx + 1) % articles.length],
    sections = articleDetails[a.slug] || [];
  return `${header()}<main id="top"><div class="article-head"><a class="eyebrow" href="/blog/">← Semua artikel</a><div class="article-head-grid"><h1 class="serif">${a.title}</h1><div class="article-head-side"><p>${a.body[0]}</p><div class="article-author"><div class="author-avatar">LP</div><div><span class="eyebrow">Tim editorial · contoh</span><span class="micro">2026 · 5 menit baca</span></div></div><div class="share-row"><button class="share-btn" disabled title="Akun resmi belum tersedia" aria-label="Instagram belum tersedia">IG</button><button class="share-btn" disabled title="Akun resmi belum tersedia" aria-label="LinkedIn belum tersedia">IN</button><button class="share-btn" disabled title="Akun resmi belum tersedia" aria-label="Behance belum tersedia">BE</button><button class="share-btn" aria-label="Salin tautan" id="copyLink">↗</button><span id="copyStatus" role="status" class="micro"></span></div></div></div></div><div class="article-cover">${img(a.image, a.title)}</div><article class="article-body"><span class="sample-label">Artikel contoh</span><p class="article-lead">${a.body[0]}</p><p>${a.body[1]}</p>${sections.map((sec, i) => `<section class="article-section"><h2 class="serif">${sec[0]}</h2><p>${sec[1]}</p>${i === 1 || i === 3 ? img(i === 1 ? "gallery-courtyard.webp" : "gallery-lounge.webp", "Ilustrasi visual artikel") : ""}</section>`).join("")}<div class="article-outro"><div class="eyebrow">[ Catatan akhir ]</div><p>Artikel ini adalah konten ilustratif untuk memperlihatkan format jurnal Leak Properti, bukan pernyataan tentang layanan atau properti nyata.</p></div></article><div class="article-next page-pad"><a href="/blog/${prev.slug}/"><span class="eyebrow">← Artikel sebelumnya</span><strong class="serif">${prev.title}</strong></a><a href="/blog/${next.slug}/"><span class="eyebrow">Artikel berikutnya →</span><strong class="serif">${next.title}</strong></a></div></main>${footer()}${overlays()}`;
}
function legalPage(kind) {
  const data = {
    "privacy-policy": {
      title: "Privasi",
      sections: [
        [
          "Status dokumen",
          "Kebijakan privasi resmi Leak Properti belum disediakan. Halaman ini adalah penanda tata letak untuk prototipe dan bukan dokumen hukum yang berlaku.",
        ],
        [
          "Formulir contoh",
          "Formulir pertanyaan pada situs ini hanya demonstrasi antarmuka. Isinya tidak dikirim ke server, tidak disimpan oleh situs, dan tidak menjadi permintaan yang diterima.",
        ],
        [
          "Sumber eksternal",
          "Font dapat dimuat dari layanan Google Fonts dan video serta gambar disajikan sebagai aset situs. Pemilik situs perlu meninjau layanan dan penyimpanan data sebelum peluncuran resmi.",
        ],
      ],
    },
    "terms-of-service": {
      title: "Ketentuan Layanan",
      sections: [
        [
          "Status dokumen",
          "Ketentuan layanan resmi belum diberikan. Isi pada halaman ini bukan perjanjian dan tidak menetapkan hak atau kewajiban pengunjung.",
        ],
        [
          "Konten ilustratif",
          "Seluruh contoh ruang, lokasi, artikel, dan gambar pada prototipe ini bersifat ilustratif. Tidak ada listing aktif atau penawaran terverifikasi.",
        ],
        [
          "Sebelum peluncuran",
          "Syarat yang benar perlu disusun dan disetujui oleh pemilik merek sebelum situs digunakan untuk layanan nyata.",
        ],
      ],
    },
    "cookie-policy": {
      title: "Kebijakan Kuki",
      sections: [
        [
          "Status dokumen",
          "Kebijakan kuki resmi belum tersedia. Halaman ini hanya menandai lokasi dokumen pada prototipe.",
        ],
        [
          "Preferensi lokal",
          "Banner informasi pada prototipe menyimpan pilihan “Mengerti” secara lokal di browser melalui localStorage agar tidak ditampilkan lagi.",
        ],
        [
          "Layanan pihak ketiga",
          "Font eksternal mungkin memicu permintaan jaringan. Setiap penggunaan analitik, kuki, atau integrasi baru perlu ditinjau dan dijelaskan sebelum peluncuran resmi.",
        ],
      ],
    },
  };
  let item = data[kind] || data["privacy-policy"];
  return `${header()}<main id="top" class="legal-page"><a class="eyebrow legal-back" href="/">← Beranda</a><div class="legal-layout"><div class="legal-title"><h1 class="serif">${item.title}</h1><span class="micro">Dokumen belum tersedia<br>Prototipe · 2026</span></div><article class="legal-copy"><span class="sample-label">Bukan kebijakan resmi</span>${item.sections.map((x) => `<section><h2>${x[0]}</h2><p>${x[1]}</p></section>`).join("")}<a href="/" class="textlink">Kembali ke beranda</a></article></div></main>${footer()}${overlays()}`;
}
let path = location.pathname.replace(/\/+$/, "") || "/";
let route = path.split("/").filter(Boolean);
let content =
  path === "/"
    ? home()
    : route[0] === "documents"
      ? legalPage(route[1])
      : route[0] === "projects"
        ? route[1]
          ? properties.find((p) => p.slug === route[1])
            ? detailPage(properties.find((p) => p.slug === route[1]))
            : projectsPage()
          : projectsPage()
        : route[0] === "blog"
          ? route[1]
            ? articles.find((a) => a.slug === route[1])
              ? articlePage(articles.find((a) => a.slug === route[1]))
              : blogPage()
            : blogPage()
          : home();
document.querySelector("#app").innerHTML = content;
const overlay = document.querySelector("#menuOverlay"),
  modal = document.querySelector("#contactModal"),
  callModal = document.querySelector("#callModal");
function lock() {
  document.body.classList.toggle(
    "lock",
    modal.classList.contains("open") ||
      callModal.classList.contains("open") ||
      (matchMedia("(max-width:767px)").matches &&
        overlay.classList.contains("open")),
  );
}
const menuBtn = document.querySelector("#menuBtn");
function menuOpen(v) {
  overlay.classList.toggle("open", v);
  overlay.setAttribute("aria-hidden", String(!v));
  menuBtn.setAttribute("aria-expanded", String(v));
  menuBtn.querySelector("span").textContent = v ? "Tutup" : "Menu";
  document.querySelector(".topbar").classList.toggle("menu-open", v);
  lock();
}
menuBtn.onclick = (e) => {
  e.stopPropagation();
  menuOpen(!overlay.classList.contains("open"));
};
menuBtn.onmouseenter = () => {
  if (matchMedia("(min-width:768px)").matches) menuOpen(true);
};
let menuTimer;
document.querySelector(".topbar").addEventListener("mouseleave", () => {
  if (matchMedia("(min-width:768px)").matches)
    menuTimer = setTimeout(() => menuOpen(false), 250);
});
overlay.addEventListener("mouseenter", () => clearTimeout(menuTimer));
overlay.addEventListener("mouseleave", () => {
  if (matchMedia("(min-width:768px)").matches) menuOpen(false);
});
overlay
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => menuOpen(false)));
document.addEventListener("click", (e) => {
  if (!e.target.closest("#menuBtn") && !e.target.closest("#menuOverlay"))
    menuOpen(false);
});
document.querySelectorAll("[data-contact]").forEach(
  (b) =>
    (b.onclick = () => {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      lock();
    }),
);
document.querySelectorAll("[data-call]").forEach(
  (b) =>
    (b.onclick = () => {
      callModal.classList.add("open");
      callModal.setAttribute("aria-hidden", "false");
      lock();
    }),
);
function closeCall() {
  callModal.classList.remove("open");
  callModal.setAttribute("aria-hidden", "true");
  lock();
}
function closeContact() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  lock();
}
document.querySelector("#callClose").onclick = closeCall;
document.querySelector("#callGotIt").onclick = closeCall;
callModal.addEventListener("click", (e) => {
  if (e.target === callModal) closeCall();
});
document.querySelector("#modalClose").onclick = closeContact;
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeContact();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeContact();
    closeCall();
    menuOpen(false);
  }
});
document.querySelector("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#formMessage").textContent =
    "Demo antarmuka selesai. Tidak ada pesan yang dikirim.";
  e.target.reset();
});
const cookieBanner = document.querySelector("#cookieBanner");
if (cookieBanner) {
  if (localStorage.getItem("leak-cookie-note") === "ok") cookieBanner.remove();
  else
    cookieBanner.querySelector("#cookieAccept").onclick = () => {
      localStorage.setItem("leak-cookie-note", "ok");
      cookieBanner.remove();
    };
}
const copyLink = document.querySelector("#copyLink");
if (copyLink)
  copyLink.onclick = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      document.querySelector("#copyStatus").textContent = "Tautan disalin";
    } catch {
      document.querySelector("#copyStatus").textContent =
        "Tidak dapat menyalin tautan";
    }
  };
if (
  window.gsap &&
  window.ScrollTrigger &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  gsap.registerPlugin(ScrollTrigger);
  if (window.SplitText) gsap.registerPlugin(SplitText);
  document.querySelectorAll(".reveal").forEach((el) => {
    const heading = el.matches("h1,h2,h3") || !!el.querySelector("h2");
    const duration = heading
      ? 1.25
      : el.classList.contains("eyebrow")
        ? 0.3
        : 0.6;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: heading ? 0 : 22,
        filter: heading ? "blur(0px)" : "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
        onComplete: () => el.classList.add("visible"),
      },
    );
  });
  if (window.SplitText) {
    document
      .querySelectorAll(
        ".sectionhead h2,.split-title h2,.services h2,.about h2,.journal h2,.faq h2,.footer-cta h2",
      )
      .forEach((h) => {
        h.setAttribute(
          "aria-label",
          h.innerHTML
            .replace(/<br\s*\/?>/gi, " ")
            .replace(/<[^>]*>/g, "")
            .replace(/\s+/g, " ")
            .trim(),
        );
        const split = new SplitText(h, { type: "words,chars" });
        gsap.fromTo(
          split.chars,
          { opacity: 0, yPercent: 20 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.5,
            stagger: 0.03,
            ease: "power2.out",
            scrollTrigger: { trigger: h, start: "top 80%", once: true },
          },
        );
      });
  }
} else {
  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}
let lenisInstance;
if (window.Lenis && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
  lenisInstance = lenis;
  if (window.gsap && window.ScrollTrigger) {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(t) {
      lenis.raf(t);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}
if (window.Swiper)
  document.querySelectorAll(".listing-gallery").forEach((g) => {
    const swiper = new Swiper(g.querySelector(".project-swiper"), {
      loop: true,
      slidesPerView: 1.25,
      spaceBetween: 7,
      breakpoints: { 768: { slidesPerView: 2.2 } },
      speed: 650,
      allowTouchMove: true,
      navigation: {
        prevEl: g.querySelector(".gallery-prev"),
        nextEl: g.querySelector(".gallery-next"),
      },
    });
    swiper.on(
      "slideChange",
      () =>
        (g.querySelector(".gallery-count").textContent =
          `0${swiper.realIndex + 1} / 05`),
    );
  });
const faqShow = document.querySelector("#faqShow");
if (faqShow)
  faqShow.onclick = () => {
    document
      .querySelectorAll(".faq-more")
      .forEach((x) => x.classList.add("visible-extra"));
    faqShow.remove();
  };
if (
  window.gsap &&
  window.ScrollTrigger &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const track = document.querySelector(".service-track"),
    svc = document.querySelector(".services");
  if (track && svc) {
    const w = innerWidth,
      h = innerHeight,
      mobile = w <= 767;
    gsap.set(track, {
      x: w * 0.56,
      y: h * 0.5,
      scale: 0.49,
      opacity: 0,
      transformOrigin: "top left",
    });
    const ch = gsap.timeline({
      scrollTrigger: {
        trigger: svc,
        start: "top top",
        end: () => "+=" + (mobile ? innerHeight * 6 : innerHeight * 7),
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    ch.to({}, { duration: 1 }, 0)
      .to(track, { opacity: 1, duration: 0.15 }, 0.85)
      .to(
        track,
        { x: mobile ? 0 : w * 0.07, y: 0, scale: 1, duration: 1, ease: "none" },
        1,
      )
      .to(
        ".service-stage>h2,.service-stage>.eyebrow",
        { opacity: 0, duration: 0.5 },
        1.4,
      );
    if (mobile) {
      ch.to(track, { x: -w, duration: 1, ease: "none" }, 2)
        .to(track, { x: -2 * w, duration: 1, ease: "none" }, 3)
        .to({}, { duration: 2 }, 4);
    } else {
      ch.to(track, { x: -w * 0.14, duration: 1, ease: "none" }, 2)
        .to(track, { x: -w * 0.334, duration: 1, ease: "none" }, 3)
        .to(track, { x: -w * 0.53, duration: 1, ease: "none" }, 4)
        .to(track, { x: -w * 0.737, duration: 1, ease: "none" }, 5)
        .to({}, { duration: 1 }, 6);
    }
  }
}
document.querySelectorAll(".faq-q").forEach(
  (b) =>
    (b.onclick = () => {
      let item = b.closest(".faq-item");
      let open = item.classList.toggle("open");
      b.setAttribute("aria-expanded", open);
      b.lastElementChild.textContent = open ? "−" : "+";
    }),
);
if (path === "/") {
  let n = 0;
  function showProject(i) {
    n = (i + properties.length) % properties.length;
    let p = properties[n],
      image = document.querySelector(".showImage");
    image.style.opacity = 0.3;
    setTimeout(() => {
      image.src = A + p.image;
      image.alt = p.name;
      image.style.opacity = 1;
    }, 160);
    document.querySelector("#showTitle").innerHTML = p.name.replace(
      " ",
      "<br>",
    );
    document.querySelector("#showYear").textContent = p.year;
    document.querySelector("#showPlace").textContent = p.place;
    document.querySelector("#showLink").href = `/projects/${p.slug}/`;
    document.querySelector("#showImageLink").href = `/projects/${p.slug}/`;
    document.querySelector("#projectCount").textContent = `0${n + 1} / 05`;
    document.querySelector("#progressFill").style.width = `${(n + 1) * 20}%`;
  }
  document.querySelector("#prevProject").onclick = () => showProject(n - 1);
  document.querySelector("#nextProject").onclick = () => showProject(n + 1);
  let sx = 0;
  document
    .querySelector(".project-show")
    .addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), {
      passive: true,
    });
  document.querySelector(".project-show").addEventListener("touchend", (e) => {
    let dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) showProject(n + (dx < 0 ? 1 : -1));
  });
  if (
    window.gsap &&
    window.ScrollTrigger &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const morph = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-home",
        start: "top top",
        end: "+=758",
        scrub: true,
      },
    });
    morph
      .set(".project-photo", {
        top: "17%",
        right: "17%",
        bottom: "17%",
        left: "17%",
      })
      .to({}, { duration: 1 })
      .to(".project-photo", {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        duration: 1,
        ease: "none",
      })
      .fromTo(
        [".project-progress", "#projectCount"],
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        1.65,
      )
      .to(
        "#showTitle",
        { top: "51%", left: "3%", duration: 1, ease: "none" },
        1,
      )
      .to(
        ".project-info .stats",
        { top: "49%", right: "2%", duration: 1, ease: "none" },
        1,
      );
  }
  const bar = document.querySelector("#topbar");
  let onscroll = () => {
    const pr = document.querySelector(".project-show").getBoundingClientRect(),
      svc = document.querySelector(".services").getBoundingClientRect(),
      foot = document.querySelector(".footer-cta").getBoundingClientRect();
    bar.classList.toggle(
      "light",
      scrollY < innerHeight * 0.78 ||
        (pr.top < 70 && pr.bottom > 70) ||
        (svc.top < 70 && svc.bottom > 70) ||
        (foot.top < 70 && foot.bottom > 70),
    );
  };
  window.addEventListener("scroll", onscroll, { passive: true });
  onscroll();
}
const globalBar = document.querySelector("#topbar");
function updateHeaderTone() {
  const darkSections = document.querySelectorAll(
    ".hero,.project-show,.services,.footer-cta,.detail-hero,.article-cover",
  );
  let overDark = [...darkSections].some((el) => {
    const r = el.getBoundingClientRect();
    return r.top < 65 && r.bottom > 65;
  });
  globalBar.classList.toggle("light", overDark);
  globalBar.classList.toggle("dark", !overDark);
}
window.addEventListener("scroll", updateHeaderTone, { passive: true });
updateHeaderTone();
if (path === "/" && document.querySelector("#preloader")) {
  const pre = document.querySelector("#preloader");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (
    sessionStorage.getItem("preloaderShown") === "1" ||
    reduceMotion ||
    !window.gsap
  ) {
    pre.remove();
    sessionStorage.setItem("preloaderShown", "1");
  } else {
    document.body.classList.add("has-preloader");
    lenisInstance?.stop();
    const cards = [...pre.querySelectorAll(".preloader-card")],
      title = pre.querySelector(".preloader-title"),
      center = pre.querySelector(".preloader-center");
    gsap.set(cards, { opacity: 0 });
    gsap.set(
      [
        title,
        document.querySelector(".topbar"),
        document.querySelector(".hero-content"),
      ],
      { opacity: 0 },
    );
    const w = innerWidth,
      mobile = matchMedia("(max-width:767px)").matches,
      tl = gsap.timeline({
        delay: 1,
        onComplete: () => {
          sessionStorage.setItem("preloaderShown", "1");
          pre.remove();
          lenisInstance?.start();
        },
      });
    cards.forEach((card, i) => {
      tl.fromTo(
        card,
        { opacity: 0, y: (i % 2 ? -1 : 1) * w * (mobile ? 0.0625 : 0.022) },
        { opacity: 1, y: 0, duration: 0.76, ease: "power2.out" },
        i * 0.07,
      );
      tl.to(
        card,
        {
          x: (i - 3) * w * (mobile ? 0.125 : 0.105),
          duration: 0.65,
          ease: "power2.inOut",
        },
        1.05 + i * 0.02,
      );
    });
    tl.to(title, { opacity: 1, duration: 0.7, ease: "power2.out" }, 1.53);
    tl.to(
      center,
      {
        width: mobile ? "60svw" : "42svw",
        height: mobile ? "45svw" : "28svw",
        duration: mobile ? 0.54 : 0.77,
        ease: "power2.inOut",
      },
      mobile ? 1.74 : 1.9,
    );
    tl.to(
      center,
      {
        width: "100svw",
        height: "100svh",
        duration: mobile ? 0.65 : 0.76,
        ease: "power2.inOut",
      },
      mobile ? 2.29 : 2.68,
    );
    tl.to(
      document.querySelector(".hero-content"),
      { opacity: 1, duration: 0.45, ease: "power2.out" },
      mobile ? 2.33 : 2.76,
    );
    tl.to(
      document.querySelector(".topbar"),
      { opacity: 1, duration: 0.6, ease: "power2.out" },
      mobile ? 2.23 : 2.76,
    );
    tl.to(
      pre,
      { opacity: 0, duration: 0.36, ease: "power2.out" },
      mobile ? 3.05 : 3.5,
    );
  }
}
let lastScrollY = scrollY;
window.addEventListener(
  "scroll",
  () => {
    const now = scrollY,
      delta = now - lastScrollY;
    lastScrollY = now;
    if (
      overlay.classList.contains("open") ||
      modal.classList.contains("open") ||
      callModal.classList.contains("open")
    )
      return;
    if (now < innerHeight * 0.05 || delta < -2)
      globalBar.classList.remove("is-hidden");
    else if (delta > 2) globalBar.classList.add("is-hidden");
  },
  { passive: true },
);
if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
  document.querySelectorAll(".composition-tile").forEach((tile) => {
    const follower = tile.querySelector("span");
    let tx = tile.clientWidth / 2,
      ty = tile.clientHeight / 2,
      x = tx,
      y = ty,
      active = false;
    function tick() {
      if (!active) return;
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      follower.style.left = x + "px";
      follower.style.top = y + "px";
      requestAnimationFrame(tick);
    }
    tile.addEventListener("pointerenter", (e) => {
      active = true;
      const r = tile.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      x = tx;
      y = ty;
      tick();
    });
    tile.addEventListener("pointermove", (e) => {
      const r = tile.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
    });
    tile.addEventListener("pointerleave", () => {
      active = false;
      follower.style.left = "50%";
      follower.style.top = "50%";
    });
  });
}
if (
  path === "/" &&
  window.gsap &&
  window.ScrollTrigger &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const comp = document.querySelector("#komposisi");
  const parallax = {
    scrollTrigger: {
      trigger: comp,
      start: "top -100%",
      end: "top -112.5%",
      scrub: true,
    },
  };
  gsap.to(
    "#komposisi .composition-tile:nth-child(4),#komposisi .composition-tile:nth-child(5)",
    { y: -110, ease: "none", scrollTrigger: { ...parallax.scrollTrigger } },
  );
  gsap.to("#komposisi .lead", {
    y: -204,
    ease: "none",
    scrollTrigger: { ...parallax.scrollTrigger },
  });
  gsap.to("#komposisi .body", {
    y: -309,
    ease: "none",
    scrollTrigger: { ...parallax.scrollTrigger },
  });
}
const imageObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.remove("is-blur");
        imageObserver.unobserve(e.target);
      }
    }),
  { threshold: 0.01 },
);
document.querySelectorAll("img:not(.preloader-center)").forEach((el) => {
  if (el.closest(".preloader")) return;
  el.classList.add("is-blur");
  imageObserver.observe(el);
});
