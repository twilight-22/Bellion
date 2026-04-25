/* Product Detail Page Script */

/* ============================================================
   DISCOUNT CONFIGURATION
   Adjust these values whenever you want to change the promo.

   DISCOUNT_PERCENT  – how much off the "original" price (0–99)
   DISCOUNT_MIN_PRICE – products at/below this price get NO discount
                        (avoids weird math on very cheap items)

   Example: DISCOUNT_PERCENT = 20 means the product price is shown
   as the DISCOUNTED price, and the original price displayed above
   the strikethrough is calculated by working backwards:
     originalPrice = currentPrice / (1 - discountPercent / 100)

   To disable discounts entirely, set DISCOUNT_PERCENT = 0.
   ============================================================ */
const DISCOUNT_CONFIG = {
  DISCOUNT_PERCENT: 20, // ← change this (e.g. 10, 25, 50)
  DISCOUNT_MIN_PRICE: 5000, // ← products cheaper than this skip the discount badge
};

// Product Data
const productData = {
  sepatu: {
    name: "Sepatu Casual Pria",
    price: 250000,
    image: "image/Ortus-removebg-preview.png",
    category: "Fashion - Sepatu",
    description:
      "Sepatu casual pria dengan desain modern dan nyaman digunakan sepanjang hari. Material berkualitas tinggi dengan sol yang empuk dan tahan lama. Cocok untuk aktivitas sehari-hari maupun acara santai.",
  },
  jaket: {
    name: "Jaket Premium",
    price: 180000,
    image: "image/jaket-removebg-preview.png",
    category: "Fashion - Jaket",
    description:
      "Jaket premium dengan bahan berkualitas tinggi yang nyaman dan hangat. Desain stylish dengan kantong yang cukup untuk menyimpan barang penting.",
  },
  mouse: {
    name: "Mouse Gaming",
    price: 150000,
    image: "image/mouse-removebg-preview.png",
    category: "Elektronik - Aksesori",
    description:
      "Mouse gaming profesional dengan sensor presisi tinggi dan desain ergonomis. Cocok untuk gaming dan pekerjaan sehari-hari.",
  },
  bd1: {
    name: "God Of War (PS4)",
    price: 170000,
    image: "image/gow_crot-removebg-preview.png",
    category: "Game - PS4",
    description:
      "God Of War (2018) — edisi PlayStation 4, cerita epik dengan grafis memukau.",
  },
  bd2: {
    name: "Sekiro: Shadows Die Twice",
    price: 500000,
    image: "image/OIP-removebg-preview.png",
    category: "Game - PS4",
    description:
      "Sekiro: Shadows Die Twice — game aksi dari FromSoftware dengan sistem pertarungan menantang.",
  },
  bd3: {
    name: "The Last Of Us Part II",
    price: 250000,
    image: "image/tlou-removebg-preview.png",
    category: "Game - PS4",
    description:
      "The Last Of Us Part II — narasi kuat dan gameplay imersif, pemenang banyak penghargaan.",
  },
  PS4: {
    name: "PlayStation 4 Uncharted 4 Edition",
    price: 3500000,
    image: "image/ps4_unchrted4-removebg-preview.png",
    category: "Konsol - PS4",
    description:
      "PlayStation 4 edisi Uncharted 4 — perangkat konsol edisi terbatas dengan bundle khusus.",
  },
  PSVR: {
    name: "PlayStation VR",
    price: 4500000,
    image: "image/vr.webp",
    category: "Aksesoris - VR",
    description:
      "PlayStation VR — perangkat realitas virtual untuk pengalaman bermain imersif.",
  },
  SepatuPNTFL: {
    name: "Sepatu Pantofel",
    price: 200000,
    image: "image/sepatu_pantofel-removebg-preview.png",
    category: "Fashion - Sepatu",
    description:
      "Sepatu pantofel berkualitas, cocok untuk acara formal dan kerja.",
  },
  Beras10kilo: {
    name: "Beras 10 Kilo",
    price: 100000,
    image: "image/beras-removebg-preview.png",
    category: "Makanan - Pokok",
    description:
      "Beras 10 kg berkualitas, cocok untuk kebutuhan rumah tangga dan persediaan panjang.",
  },
  Sweater: {
    name: "Sweater Abu-abu",
    price: 120000,
    image: "image/sweater-removebg-preview.png",
    category: "Fashion - sweater",
    description:
      "Sweater dengan bahan berkualitas tinggi, nyaman dipakai, dan bahannya lembut. cocok untuk dipakai main, jalan-jalan, atau acara santai",
  },
  CelanaBahanHitam: {
    name: "Celana bahan hitam",
    price: 150000,
    image: "image/celana_bahan-removebg-preview.png",
    category: "Fashion - Celana",
    description:
      "Celana bahan hitam dengan desain klasik, cocok untuk acara formal maupun santai. Terbuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari.",
  },
  CelanaGunung: {
    name: "Celana Gunung",
    price: 220000,
    image: "image/celana_gunung-removebg-preview.png",
    category: "Fashion - Celana",
    description:
      "Celana gunung dengan bahan tahan air dan desain ergonomis, cocok untuk aktivitas outdoor dan petualangan.",
  },
  Monitor: {
    name: "Monitor 24 inch OLED",
    price: 800000,
    image: "image/monitor.avif",
    category: "Elektronik - Monitor",
    description:
      "Monitor 24 inch dengan teknologi OLED, memberikan kualitas gambar yang tajam dan warna yang hidup. Cocok untuk gaming, desain grafis, dan penggunaan sehari-hari.",
  },
  Keyboard: {
    name: "Keyboard Mechanical Abu-abu",
    price: 675000,
    image: "image/keyboard_mechanical-removebg-preview.png",
    category: "Elektronik - Keyboard",
    description:
      "Keyboard mechanical dengan switch abu-abu, memberikan respons cepat dan nyaman untuk mengetik dan gaming. Desain ergonomis dengan pencahayaan RGB yang dapat disesuaikan.",
  },
  ModemROG: {
    name: "Modem ROG 1Gbps speed",
    price: 5000000,
    image: "image/modem ROG.webp",
    category: "Elektronik - modem",
    description:
      "Modem ROG dengan kecepatan hingga 1Gbps, ideal untuk gaming online dan streaming tanpa lag. Dilengkapi dengan fitur keamanan canggih dan desain yang stylish.",
  },
  bd4: {
    name: "World War Zombie",
    price: 500000,
    image: "image/WWZ-removebg-preview.png",
    category: "Game - PS4",
    description:
      "World War Zombie — game aksi dengan tema zombie apocalypse, menawarkan pengalaman bermain yang seru dan menegangkan.",
  },
  bd5: {
    name: "God Of War II",
    price: 170000,
    image: "image/GOW2-removebg-preview.png",
    category: "Game - PS2",
    description:
      "God Of War II — sekuel dari game aksi epik, menghadirkan petualangan baru dengan grafis yang ditingkatkan dan gameplay yang lebih seru.",
  },
  bd6: {
    name: "God Of War III",
    price: 230000,
    image: "image/GOW3-removebg-preview.png",
    category: "Game",
    description:
      "God Of War III — puncak dari trilogi, menawarkan grafis memukau dan pertarungan epik melawan dewa-dewa mitologi Yunani.",
  },
  Sawit: {
    name: "Sawit",
    price: 3500000,
    image: "image/sawit.png",
    category: "Makanan - Pokok",
    description:
      "Sawit berkualitas tinggi, dipanen pada tingkat yang optimal untuk menghasilkan minyak maksimal dan di sukai oleh prab...",
  },
  RogAlly: {
    name: "Rog Ally",
    price: 10000000,
    image: "image/rojali.png",
    category: "Elektronik - PC Portable",
    description:
      "ROG Ally adalah handheld gaming bertenaga tinggi dengan performa setara PC, ditenagai prosesor AMD Ryzen Z1 series.",
  },
  RogAllyX: {
    name: "Rog Ally X",
    price: 17000000,
    image: "image/rojali x.png",
    category: "Elektronik - PC Portable",
    description:
      "ROG Ally X adalah handheld gaming terbaru dengan peningkatan performa dan daya tahan baterai lebih besar dan ditenagai prosesor yang lebih kuat dan baru yaitu AMD Ryzen Z1 Extreme",
  },
  DimsumMentai: {
    name: "Dimsum Mentai",
    price: 10000,
    image: "image/dimsum mentai.png",
    category: "Makanan - Enak",
    description:
      "Dimsum mentai adalah camilan lezat dengan isian daging pilihan yang lembut juicy luicy mahalini rizki febian altamis ghazy marsel febry tegar bisa pesen online.",
  },
  Oat1kg: {
    name: "Oat 1kg",
    price: 50000,
    image: "image/oat 1kg.png",
    category: "Makanan - Bulking",
    description:
      "Oat adalah makanan sehat tinggi serat yang baik untuk menjaga energi dan pencernaan. Cocok untuk sarapan pagi yang praktis, dapat disajikan dengan susu, buah, atau topping favorit.",
  },
  SusuPlantProtein: {
    name: "Susu Plant Protein",
    price: 170000,
    image: "image/susu protein.png",
    category: "Makanan - Protein",
    description:
      "Susu plant protein adalah minuman tinggi protein berbahan nabati yang cocok untuk gaya hidup sehat. Dibuat dari sumber seperti kedelai, almond, atau oat, minuman ini mudah dicerna dan bebas laktosa.",
  },
  KaosLari: {
    name: "Kaos Lari",
    price: 110000,
    image: "image/kaos lari.png",
    category: "Fashion - Kalcer",
    description:
      "Kaos lari berbahan ringan dan breathable yang membantu menjaga tubuh tetap sejuk saat beraktivitas.",
  },
  KacamataHitam: {
    name: "Kacamata Hitam",
    price: 200000,
    image: "image/kacamata hitam.png",
    category: "Fashion - Aksesoris",
    description:
      "Kacamata hitam dengan desain stylish dan perlindungan optimal dari sinar UV. Lensa jernih, ringan, dan nyaman dipakai seharian. Cocok untuk aktivitas outdoor sekaligus menunjang penampilan.",
  },
  SepatuBola: {
    name: "Sepatu Bola",
    price: 500000,
    image: "image/sepatu bola.png",
    category: "Fashion - Sport",
    description:
      "Sepatu bola dengan desain ringan dan grip kuat untuk performa maksimal di lapangan. Dilengkapi sol yang stabil dan bahan nyaman, membantu kontrol bola lebih baik serta pergerakan lebih lincah. Cocok untuk latihan maupun pertandingan.",
  },
  MieSekardus: {
    name: "Mie Sekardus",
    price: 125000,
    image: "image/mie sekardus.png",
    category: "Makanan - Pokok",
    description:
      "Mie instan sekardus praktis untuk stok di rumah atau usaha. Tersedia dalam berbagai varian rasa, mudah dimasak, dan cocok untuk kebutuhan sehari-hari.",
  },
  NintendoSwitch2: {
    name: "Nintendo Switch 2",
    price: 9500000,
    image: "image/nintendi switch 2.png",
    category: "Elektronik - Konsol",
    description:
      "Konsol game hybrid yang bisa dimainkan di TV maupun secara portable. Dilengkapi kontroler Joy-Con yang fleksibel, grafis jernih, dan koleksi game seru. Cocok untuk bermain sendiri atau bersama teman dan keluarga kapan saja.",
  },
  Steamdeck: {
    name: "Steamdeck",
    price: 9000000,
    image: "image/steamdeck.png",
    category: "Elektronik - PC Portable",
    description:
      "Handheld gaming berbasis PC dari Valve yang memungkinkan kamu memainkan game Steam di mana saja. Ditenagai hardware kuat dengan kontrol lengkap, layar jernih, dan sistem fleksibel. Cocok untuk gamer yang ingin pengalaman PC dalam bentuk portable.",
  },
  PlayGift: {
    name: "Play Gift",
    price: 850000,
    image: "image/play gift (1).png",
    category: "Game - TopUp",
    description:
      "Voucher digital untuk mengisi saldo Google Play, bisa digunakan membeli game, aplikasi, film, dan konten lainnya. Praktis, cepat digunakan, dan cocok sebagai hadiah atau kebutuhan pribadi tanpa ribet.",
  },
  VoucherRoblox: {
    name: "Voucher Roblox",
    price: 150000,
    image: "image/voucher roblox.png",
    category: "Game - TopUp",
    description:
      "Voucher Roblox untuk mendapatkan Robux dan berbagai item eksklusif di dalam game. Praktis digunakan, cocok untuk top up atau hadiah bagi pemain Roblox agar pengalaman bermain semakin seru.",
  },
  FloatyTerserah: {
    name: "Floaty Terserah",
    price: 8000,
    image: "image/floaty terserah (1).png",
    category: "Makanan - Misteri",
    description:
      "camilan ringan berbentuk bantal kecil (bantal gandum) berukuran 60 gram yang viral karena pemasaran uniknya. Snack ini berbahan gandum utuh dan oat yang renyah dengan perpaduan rasa gurih, keju, barbeku, ayam bawang, dan balado, menghasilkan rasa unik yang sulit dideskripsikan.",
  },
  JaketFF: {
    name: "Hoodie Free Fire",
    price: 50000,
    image: "image/jaket ff.png",
    category: "Fashion - Hoodie",
    description:
      "Hoodie bertema Free Fire dengan desain keren dan bahan nyaman dipakai sehari-hari. Hangat, stylish, dan cocok untuk penggemar game yang ingin tampil santai sekaligus keren. Ideal untuk aktivitas casual maupun hangout.",
  },
  SpeakerJBL: {
    name: "Speaker JBL",
    price: 500000,
    image: "image/speaker jbl (1).png",
    category: "Elektronik - Speaker",
    description:
      "Speaker JBL dengan suara jernih dan bass powerful, cocok untuk musik, gaming, maupun aktivitas outdoor. Desain portable, baterai tahan lama, dan mudah terhubung ke berbagai perangkat. Praktis dibawa ke mana saja untuk pengalaman audio maksimal.",
  },
  BajuAlucard: {
    name: "Baju Alucard",
    price: 35000,
    image: "image/kaos alucard.png",
    category: "Fashion - HeHeyNotBad",
    description:
      "Baju dengan desain karakter Alucard yang keren dan stylish, cocok untuk penggemar Mobile Legends: Bang Bang. Menggunakan bahan nyaman dan adem, pas untuk dipakai sehari-hari. Tampil lebih percaya diri dengan gaya gamer yang standout.",
  },
  PompaAir: {
    name: "Pompa Air",
    price: 600000,
    image: "image/pompa air.png",
    category: "Elektronik - Mesin",
    description:
      "Pompa air berkualitas untuk memenuhi kebutuhan air rumah tangga. Daya hisap kuat, aliran stabil, dan hemat listrik. Cocok untuk sumur dangkal maupun toren, dengan desain kokoh dan tahan lama.",
  },
  BigEnterKey: {
    name: "Big Enter Key",
    price: 150000,
    image: "image/bantal key enter.png",
    category: "Elektronik - Aksesoris",
    description:
      "Big Enter Key adalah tombol enter berukuran besar yang unik dan fungsional, cocok sebagai pengganti tombol keyboard atau sekadar aksesoris meja. Nyaman ditekan, responsif, dan bisa digunakan sebagai “stress reliever” saat bekerja atau bermain. Desain lucu dan menarik, cocok untuk setup PC kamu.",
  },
  ControllerXboxDeadpool: {
    name: "Controller Xbox Deadpool",
    price: 700000,
    image: "image/deadpool xbox controller.png",
    category: "Elektronik - Controller",
    description:
      "Controller Xbox dengan desain tema Deadpool yang unik dan eye-catching. Dilengkapi tombol responsif, grip nyaman, dan kompatibel dengan Xbox maupun PC. Cocok untuk gamer yang ingin tampil beda dengan sentuhan karakter favorit saat bermain gyaaaatttss!!!.",
  },
  PowebankOraimoXTahilalats: {
    name: "Powerbank Oraimo X Tahilalats",
    price: 100000,
    image: "image/powerbank oraimo x tahilalats.png",
    category: "Elektronik - Powebank",
    description:
      "Powerbank edisi kolaborasi Tahilalats dengan desain unik dan playful, cocok untuk kamu yang ingin tampil beda. Dilengkapi kapasitas 10.000mAh dan fast charging hingga 15W, mampu mengisi daya smartphone beberapa kali dengan praktis. Ringan, stylish, dan ideal untuk aktivitas harian maupun traveling.",
  },
  RunningBelt: {
    name: "Running Belt",
    price: 30000,
    image: "image/running belt.png",
    category: "Fashion - Aksesoris",
    description:
      "Running belt adalah tas pinggang olahraga yang dirancang untuk membawa barang penting seperti HP, kunci, dan uang saat berlari. Didesain ringan, nyaman, dan anti goyang sehingga tidak mengganggu gerakan. Cocok untuk jogging, gym, maupun aktivitas outdoor sehari-hari.",
  },
  Sandisk256gb: {
    name: "Sandisk 256GB",
    price: 300000,
    image: "image/sandisk 256gb.png",
    category: "Elektronik - Storage Device",
    description:
      "SanDisk 256GB adalah kartu memori berkapasitas besar dengan kecepatan tinggi, ideal untuk menyimpan foto, video, game, dan file penting.",
  },
  DeathStranding: {
    name: "Death Stranding",
    price: 300000,
    image: "image/DeathStrranding.png",
    category: "Game - PS4",
    description:
      "BD (Blu-ray Disc) Death Stranding adalah game petualangan dengan cerita unik dan sinematik, mengikuti perjalanan Sam dalam menghubungkan kembali dunia yang terpecah. Menawarkan grafis memukau, gameplay eksplorasi yang mendalam, dan pengalaman cerita yang emosional. Cocok untuk pemain yang menyukai game story-driven di konsol.",
  },
  PosterDragonball: {
    name: "Poster Dragonball",
    price: 2000,
    image: "image/dekorasi dragonball.png",
    category: "Game - Poster",
    description:
      "Poster Dragon Ball dengan desain karakter ikonik dan warna tajam, cocok untuk dekorasi kamar atau ruang gaming.",
  },
};

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

function clearAllReviews() {
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("reviews_")) {
      localStorage.removeItem(key);
    }
  });
}

// Load product data
function loadProduct() {
  const product = productData[productId];

  if (!product) {
    const container = document.querySelector(".detail-content");
    if (container)
      container.innerHTML = '<p style="color:red;">Produk tidak ditemukan</p>';
    return;
  }

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  const imgEl = document.getElementById("productImage");
  if (imgEl) {
    imgEl.src = product.image || "image/jaket-removebg-preview.png";
    imgEl.alt = product.name || "Product image";
  }

  setText("productTitle", product.name || "Produk");
  setText("productCategory", product.category || "Kategori");
  setText(
    "productDescription",
    product.description || "Deskripsi tidak tersedia.",
  );
  if (product.name) document.title = product.name + " - BELLION STORE";

  // ── Dynamic discount logic ──────────────────────────────────
  // The prices stored in productData are already the SALE prices.
  // We work backwards to derive the "original" (pre-discount) price
  // so the displayed strikethrough is always accurate for every product.
  const currentPrice = product.price || 0;
  const pct = DISCOUNT_CONFIG.DISCOUNT_PERCENT;
  const minForDiscount = DISCOUNT_CONFIG.DISCOUNT_MIN_PRICE;
  const hasDiscount = pct > 0 && currentPrice > minForDiscount;

  // Discounted price element (the big orange number)
  setText("productPrice", "Rp " + currentPrice.toLocaleString("id-ID"));

  // Original (pre-discount) price — only shown when discount applies
  const originalPriceEl = document.getElementById("originalPrice");
  const discountBadgeEl = document.getElementById("discountBadge");

  if (originalPriceEl) {
    if (hasDiscount) {
      // Back-calculate: if currentPrice = original × (1 - pct/100),
      // then original = currentPrice / (1 - pct/100)
      const originalPrice = Math.round(currentPrice / (1 - pct / 100));
      originalPriceEl.textContent =
        "Rp " + originalPrice.toLocaleString("id-ID");
      originalPriceEl.style.display = "";
    } else {
      // Hide the strikethrough entirely for products with no discount
      originalPriceEl.style.display = "none";
    }
  }

  // Discount badge (e.g. "-20%") — shown/hidden dynamically
  if (discountBadgeEl) {
    if (hasDiscount) {
      discountBadgeEl.textContent = "-" + pct + "%";
      discountBadgeEl.style.display = "";
    } else {
      discountBadgeEl.style.display = "none";
    }
  }
}

// Quantity controls
function increaseQty() {
  const qtyInput = document.getElementById("quantity");
  qtyInput.value = Math.min(parseInt(qtyInput.value) + 1, 99);
}

function decreaseQty() {
  const qtyInput = document.getElementById("quantity");
  qtyInput.value = Math.max(parseInt(qtyInput.value) - 1, 1);
}

// Add to cart
function addProductToCart() {
  const product = productData[productId];
  const qty = parseInt(document.getElementById("quantity").value);

  if (!product) return;

  for (let i = 0; i < qty; i++) {
    addToCart(product.name, product.price, product.image);
  }

  // Show notification
  const btn = document.getElementById("addToCartBtn");
  const originalText = btn.textContent;
  const originalBackground = window.getComputedStyle(btn).background;

  btn.textContent = "✓ Ditambahkan!";
  btn.style.background = "linear-gradient(90deg, #10b981, #059669)";
  btn.style.boxShadow = "0 8px 24px rgba(16, 185, 129, 0.2)";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = "";
    btn.style.boxShadow = "";
    btn.disabled = false;
  }, 2000);
}

// Buy now
function buyProductNow() {
  const product = productData[productId];
  if (!product) return;

  window.location.href =
    "checkout.html?nama=" +
    encodeURIComponent(product.name) +
    "&harga=" +
    product.price;
}

// Go back
function goBack() {
  window.history.back();
}

// Reviews storage key helper
function reviewsKey(id) {
  return "reviews_" + id;
}

function getStoredReviews(id) {
  try {
    return JSON.parse(localStorage.getItem(reviewsKey(id))) || [];
  } catch (e) {
    return [];
  }
}
function saveStoredReviews(id, reviews) {
  localStorage.setItem(reviewsKey(id), JSON.stringify(reviews));
}

function calculateCombinedRating(id, storedReviews) {
  if (!storedReviews || storedReviews.length === 0) {
    return { avg: 0, count: 0 };
  }
  const sum = storedReviews.reduce((s, r) => s + (r.rating || 0), 0);
  const avg = sum / storedReviews.length;
  return { avg: Math.round(avg * 10) / 10, count: storedReviews.length };
}

function renderRatingSummary(id) {
  const summaryEl = document.getElementById("ratingSummary");
  if (!summaryEl) return;
  const stored = getStoredReviews(id);
  const combined = calculateCombinedRating(id, stored);
  const starsHtml =
    typeof renderStars === "function"
      ? renderStars(combined.avg)
      : `${combined.avg}★`;
  summaryEl.innerHTML = `${starsHtml} <span class="review-count">(${combined.count} ulasan)</span>`;
}

function renderReviewsList(id) {
  const listEl = document.getElementById("reviewsList");
  if (!listEl) return;
  const stored = getStoredReviews(id);
  if (stored.length === 0) {
    listEl.innerHTML =
      '<p style="color:#333333;">Belum ada ulasan. Jadilah yang pertama!</p>';
    return;
  }
  listEl.innerHTML = "";
  stored
    .slice()
    .reverse()
    .forEach((r) => {
      const div = document.createElement("div");
      div.style.padding = "10px 0";
      div.style.borderBottom = "1px solid #f0f0f0";
      const stars =
        typeof renderStars === "function"
          ? renderStars(r.rating)
          : `${r.rating}★`;
      const when = new Date(r.date).toLocaleString();
      div.innerHTML = `<div style="font-size:14px;color:#333;">${stars}
              <small style="color:#999;margin-left:8px;">${when}</small></div>
              <div style="margin-top:6px;color:#222;">${r.comment ? escapeHtml(r.comment) : ""}</div>`;
      listEl.appendChild(div);
    });
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function handleReviewSubmit(e) {
  e.preventDefault();
  if (!productId) return;

  const form = document.getElementById("reviewForm");
  const starContainer = document.getElementById("starRating");
  const selected = starContainer
    ? parseInt(starContainer.getAttribute("data-value") || "0", 10)
    : 0;
  const commentEl = document.getElementById("reviewComment");

  if (!selected || selected < 1 || selected > 5) {
    alert("Silakan pilih rating (1-5).");
    return;
  }

  const rating = selected;
  const comment = commentEl.value.trim();

  const reviews = getStoredReviews(productId);
  reviews.push({ rating, comment, date: new Date().toISOString() });
  saveStoredReviews(productId, reviews);

  // Verify save was successful
  console.log("Review saved for", productId, ":", reviews);

  // Reset form and stars
  if (form) form.reset();
  if (commentEl) commentEl.value = "";
  if (starContainer) starContainer.setAttribute("data-value", "0");
  document
    .querySelectorAll("#starRating .star")
    .forEach((s) => s.classList.remove("selected", "hover"));

  renderRatingSummary(productId);
  renderReviewsList(productId);

  // Show confirmation
  alert("Ulasan berhasil dikirim!");

  // update any global product rating store if present
  try {
    if (window.productDataStore && window.productDataStore[productId]) {
      const combined = calculateCombinedRating(productId, reviews);
      window.productDataStore[productId].rating = combined.avg;
      window.productDataStore[productId].reviews = combined.count;
    }
  } catch (err) {
    console.error("Error updating product store:", err);
  }
}

function loadReviews() {
  if (!productId) return;
  renderRatingSummary(productId);
  renderReviewsList(productId);

  const form = document.getElementById("reviewForm");
  if (form) {
    form.removeEventListener("submit", handleReviewSubmit);
    form.addEventListener("submit", handleReviewSubmit);
  }
  initInteractiveStars();
}

// render helper for external array (server+local)
function renderReviewsListFromArray(arr) {
  const listEl = document.getElementById("reviewsList");
  if (!listEl) return;
  if (!arr || arr.length === 0) {
    listEl.innerHTML =
      '<p style="color:#666;">Belum ada ulasan. Jadilah yang pertama!</p>';
    return;
  }
  listEl.innerHTML = "";
  arr
    .slice()
    .reverse()
    .forEach((r) => {
      const div = document.createElement("div");
      div.style.padding = "10px 0";
      div.style.borderBottom = "1px solid #f0f0f0";
      const stars =
        typeof renderStars === "function"
          ? renderStars(r.rating)
          : `${r.rating}★`;
      const when = new Date(r.date).toLocaleString();
      div.innerHTML = `<div style="font-size:14px; color:#333;">${stars}
              <small style="color:#999;margin-left:8px;">${when}</small></div>
              <div style="margin-top:6px; color:#222;">${r.comment ? escapeHtml(r.comment) : ""}</div>`;
      listEl.appendChild(div);
    });
}

// Interactive stars
function initInteractiveStars() {
  const container = document.getElementById("starRating");
  if (!container) return;
  const stars = Array.from(container.querySelectorAll(".star"));
  function highlight(count) {
    stars.forEach((s) => {
      const v = parseInt(s.getAttribute("data-value"), 10);
      s.classList.toggle("hover", v <= count);
    });
  }
  function select(count) {
    container.setAttribute("data-value", count);
    stars.forEach((s) => {
      const v = parseInt(s.getAttribute("data-value"), 10);
      s.classList.toggle("selected", v <= count);
    });
  }
  stars.forEach((s) => {
    const v = parseInt(s.getAttribute("data-value"), 10);
    s.addEventListener("mouseover", () => highlight(v));
    s.addEventListener("mouseout", () => highlight(0));
    s.addEventListener("click", () => select(v));
  });
}

// Backend sync functions
function fetchReviewsFromServer(id) {
  return new Promise((resolve, reject) => {
    if (!id) return reject();
    fetch("/api/reviews?productId=" + encodeURIComponent(id))
      .then((r) => {
        if (!r.ok) return reject();
        return r.json();
      })
      .then((js) => resolve(js))
      .catch(reject);
  });
}

function postReviewToServer(id, review) {
  return new Promise((resolve, reject) => {
    if (!id) return reject();
    fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.assign({ productId: id }, review)),
    })
      .then((r) => {
        if (!r.ok) return reject();
        return r.json();
      })
      .then((js) => resolve(js))
      .catch(reject);
  });
}

function queuePendingReview(id, review) {
  try {
    const key = "pending_reviews_" + id;
    const arr = JSON.parse(localStorage.getItem(key) || "[]");
    arr.push(review);
    localStorage.setItem(key, JSON.stringify(arr));
  } catch (e) {}
}

function flushPendingReviews(id) {
  try {
    const key = "pending_reviews_" + id;
    const arr = JSON.parse(localStorage.getItem(key) || "[]");
    if (!arr || arr.length === 0) return;
    // send sequentially
    (async function sendAll() {
      for (const r of arr.slice()) {
        try {
          await postReviewToServer(id, r);
          // remove one by one
          const current = JSON.parse(localStorage.getItem(key) || "[]");
          current.shift();
          localStorage.setItem(key, JSON.stringify(current));
        } catch (e) {
          break; // stop if any fails
        }
      }
    })();
  } catch (e) {}
}

// Load on page load
document.addEventListener("DOMContentLoaded", () => {
  loadProduct();
  loadReviews();
});
