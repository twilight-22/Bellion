/* Product Detail Page Script */

// Product Data
const productData = {
    sepatu: {
        name: 'Sepatu Casual Pria',
        price: 250000,
        image: 'image/Ortus-removebg-preview.png',
        category: 'Fashion - Sepatu',
        description: 'Sepatu casual pria dengan desain modern dan nyaman digunakan sepanjang hari. Material berkualitas tinggi dengan sol yang empuk dan tahan lama. Cocok untuk aktivitas sehari-hari maupun acara santai.'
    },
    jaket: {
        name: 'Jaket Premium',
        price: 180000,
        image: 'image/jaket-removebg-preview.png',
        category: 'Fashion - Jaket',
        description: 'Jaket premium dengan bahan berkualitas tinggi yang nyaman dan hangat. Desain stylish dengan kantong yang cukup untuk menyimpan barang penting.'
    },
    mouse: {
        name: 'Mouse Gaming',
        price: 150000,
        image: 'image/mouse-removebg-preview.png',
        category: 'Elektronik - Aksesori',
        description: 'Mouse gaming profesional dengan sensor presisi tinggi dan desain ergonomis. Cocok untuk gaming dan pekerjaan sehari-hari.'
    },
    bd1: {
        name: 'God Of War (PS4)',
        price: 170000,
        image: 'image/gow_crot-removebg-preview.png',
        category: 'Game - PS4',
        description: 'God Of War (2018) — edisi PlayStation 4, cerita epik dengan grafis memukau.'
    },
    bd2: {
        name: 'Sekiro: Shadows Die Twice',
        price: 500000,
        image: 'image/OIP-removebg-preview.png',
        category: 'Game - PS4',
        description: 'Sekiro: Shadows Die Twice — game aksi dari FromSoftware dengan sistem pertarungan menantang.'
    },
    bd3: {
        name: 'The Last Of Us Part II',
        price: 250000,
        image: 'image/tlou-removebg-preview.png',
        category: 'Game - PS4',
        description: 'The Last Of Us Part II — narasi kuat dan gameplay imersif, pemenang banyak penghargaan.'
    },
    PS4: {
        name: 'PlayStation 4 Uncharted 4 Edition',
        price: 3500000,
        image: 'image/ps4_unchrted4-removebg-preview.png',
        category: 'Konsol - PS4',
        description: 'PlayStation 4 edisi Uncharted 4 — perangkat konsol edisi terbatas dengan bundle khusus.'
    },
    PSVR: {
        name: 'PlayStation VR',
        price: 4500000,
        image: 'image/vr.webp',
        category: 'Aksesori - VR',
        description: 'PlayStation VR — perangkat realitas virtual untuk pengalaman bermain imersif.'
    },
    SepatuPNTFL: {
        name: 'Sepatu Pantofel',
        price: 200000,
        image: 'image/sepatu_pantofel-removebg-preview.png',
        category: 'Fashion - Sepatu',
        description: 'Sepatu pantofel berkualitas, cocok untuk acara formal dan kerja.'
    },
    Beras10kilo: {
        name: 'Beras 10 Kilo',
        price: 100000,
        image: 'image/beras-removebg-preview.png',
        category: 'Makanan - Pokok',
        description: 'Beras 10 kg berkualitas, cocok untuk kebutuhan rumah tangga dan persediaan panjang.'
    },
    Sweater: {
        name:'Sweater Abu-abu',
        price: 120000,
        image:'image/sweater-removebg-preview.png',
        category:'Fashion - sweater',
        description:'Sweater dengan bahan berkualitas tinggi, nyaman dipakai, dan bahannya lembut. cocok untuk dipakai main, jalan-jalan, atau acara santai',
    },
    CelanaBahanHitam: {
        name: 'Celana bahan hitam',
        price: 150000,
        image:'image/celana_bahan-removebg-preview.png',
        category:'Fashion - Celana',
        description:'Celana bahan hitam dengan desain klasik, cocok untuk acara formal maupun santai. Terbuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari.',
    },
    CelanaGunung: {
        name:'Celana Gunung', 
        price: 220000, 
        image: 'image/celana_gunung-removebg-preview.png',
        category: 'Fashion - Celana',
        description: 'Celana gunung dengan bahan tahan air dan desain ergonomis, cocok untuk aktivitas outdoor dan petualangan.',
    },
    Monitor: {
        name:'Monitor 24 inch OLED',
        price: 800000,
        image: 'image/monitor.avif',
        category: 'Elektronik - Monitor',
        description: 'Monitor 24 inch dengan teknologi OLED, memberikan kualitas gambar yang tajam dan warna yang hidup. Cocok untuk gaming, desain grafis, dan penggunaan sehari-hari.',
    },
    Keyboard: {
        name:'Keyboard Mechanical Abu-abu',
        price: 675000, 
        image: 'image/keyboard_mechanical-removebg-preview.png',
        category: 'Elektronik - Keyboard',
        description: 'Keyboard mechanical dengan switch abu-abu, memberikan respons cepat dan nyaman untuk mengetik dan gaming. Desain ergonomis dengan pencahayaan RGB yang dapat disesuaikan.',
    }, 
    ModemROG: { 
        name:'Modem ROG 1Gbps speed', 
        price: 5000000, 
        image: 'image/modem ROG.webp',
        category: 'Elektronik - modem',
        description: 'Modem ROG dengan kecepatan hingga 1Gbps, ideal untuk gaming online dan streaming tanpa lag. Dilengkapi dengan fitur keamanan canggih dan desain yang stylish.',
    },
    bd4: { 
        name: 'World War Zombie', 
        price: 500000, 
        image: 'image/WWZ-removebg-preview.png', 
        category: 'Game - PS4', 
        description: 'World War Zombie — game aksi dengan tema zombie apocalypse, menawarkan pengalaman bermain yang seru dan menegangkan.'
    },
    bd5: { 
        name: 'God Of War II',
        price: 170000,
        image: 'image/GOW2-removebg-preview.png',
        category: 'Game - PS2',
        description: 'God Of War II — sekuel dari game aksi epik, menghadirkan petualangan baru dengan grafis yang ditingkatkan dan gameplay yang lebih seru.' 
        },
    bd6: {
        name: 'God Of War III',
        price: 230000, 
        image: 'image/GOW3-removebg-preview.png', 
        category: 'Game', 
        description: 'God Of War III — puncak dari trilogi, menawarkan grafis memukau dan pertarungan epik melawan dewa-dewa mitologi Yunani.'
    },
};

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

function clearAllReviews() {
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('reviews_')) {
            localStorage.removeItem(key);
        }
    });
}

// Load product data
function loadProduct() {
    const product = productData[productId];

    if (!product) {
        const container = document.querySelector('.detail-content');
        if (container) container.innerHTML = '<p style="color:red;">Produk tidak ditemukan</p>';
        return;
    }

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    const imgEl = document.getElementById('productImage');
    if (imgEl) {
        imgEl.src = product.image || 'image/jaket.jfif';
        imgEl.alt = product.name || 'Product image';
    }

    setText('productTitle', product.name || 'Produk');
    setText('productPrice', 'Rp ' + (product.price || 0).toLocaleString('id-ID'));
    setText('productCategory', product.category || 'Kategori');
    setText('productDescription', product.description || 'Deskripsi tidak tersedia.');
    if (product.name) document.title = product.name + ' - BELLION STORE';
}

// Quantity controls
function increaseQty() {
    const qtyInput = document.getElementById('quantity');
    qtyInput.value = Math.min(parseInt(qtyInput.value) + 1, 99);
}

function decreaseQty() {
    const qtyInput = document.getElementById('quantity');
    qtyInput.value = Math.max(parseInt(qtyInput.value) - 1, 1);
}

// Add to cart
function addProductToCart() {
    const product = productData[productId];
    const qty = parseInt(document.getElementById('quantity').value);

    if (!product) return;

    for (let i = 0; i < qty; i++) {
        addToCart(product.name, product.price, product.image);
    }

    // Show notification
    const btn = document.getElementById('addToCartBtn');
    const originalText = btn.textContent;
    const originalBackground = window.getComputedStyle(btn).background;
    
    btn.textContent = '✓ Ditambahkan!';
    btn.style.background = 'linear-gradient(90deg, #10b981, #059669)';
    btn.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.2)';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.boxShadow = '';
        btn.disabled = false;
    }, 2000);
}

// Buy now
function buyProductNow() {
    const product = productData[productId];
    if (!product) return;

    window.location.href = 'checkout.html?nama=' + encodeURIComponent(product.name) + '&harga=' + product.price;
}

// Go back
function goBack() {
    window.history.back();
}

// Reviews storage key helper
function reviewsKey(id) { return 'reviews_' + id; }

function getStoredReviews(id) {
    try { return JSON.parse(localStorage.getItem(reviewsKey(id))) || []; }
    catch (e) { return []; }
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
    const summaryEl = document.getElementById('ratingSummary');
    if (!summaryEl) return;
    const stored = getStoredReviews(id);
    const combined = calculateCombinedRating(id, stored);
    const starsHtml = (typeof renderStars==='function') ? renderStars(combined.avg) : `${combined.avg}★`;
    summaryEl.innerHTML = `${starsHtml} <span class="review-count">(${combined.count} ulasan)</span>`;
}

function renderReviewsList(id) {
    const listEl = document.getElementById('reviewsList');
    if (!listEl) return;
    const stored = getStoredReviews(id);
    if (stored.length===0) {
        listEl.innerHTML = '<p style="color:#666;">Belum ada ulasan. Jadilah yang pertama!</p>';
        return;
    }
    listEl.innerHTML = '';
    stored.slice().reverse().forEach(r=>{
        const div = document.createElement('div');
        div.style.padding='10px 0'; div.style.borderBottom='1px solid #f0f0f0';
        const stars = (typeof renderStars==='function') ? renderStars(r.rating) : `${r.rating}★`;
        const when = new Date(r.date).toLocaleString();
        div.innerHTML = `<div style="font-size:14px;color:#333;">${stars}
              <small style="color:#999;margin-left:8px;">${when}</small></div>
              <div style="margin-top:6px;color:#222;">${r.comment ? escapeHtml(r.comment) : ''}</div>`;
        listEl.appendChild(div);
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function handleReviewSubmit(e) {
    e.preventDefault();
    if (!productId) return;

    const form = document.getElementById('reviewForm');
    const starContainer = document.getElementById('starRating');
    const selected = starContainer ? parseInt(starContainer.getAttribute('data-value') || '0', 10) : 0;
    const commentEl = document.getElementById('reviewComment');

    if (!selected || selected < 1 || selected > 5) {
        alert('Silakan pilih rating (1-5).');
        return;
    }

    const rating = selected;
    const comment = commentEl.value.trim();

    const reviews = getStoredReviews(productId);
    reviews.push({ rating, comment, date: new Date().toISOString() });
    saveStoredReviews(productId, reviews);
    
    // Verify save was successful
    console.log('Review saved for', productId, ':', reviews);

    // Reset form and stars
    if (form) form.reset();
    if (commentEl) commentEl.value = '';
    if (starContainer) starContainer.setAttribute('data-value', '0');
    document.querySelectorAll('#starRating .star').forEach(s => s.classList.remove('selected', 'hover'));

    renderRatingSummary(productId);
    renderReviewsList(productId);

    // Show confirmation
    alert('Ulasan berhasil dikirim!');

    // update any global product rating store if present
    try {
        if (window.productDataStore && window.productDataStore[productId]) {
            const combined = calculateCombinedRating(productId, reviews);
            window.productDataStore[productId].rating = combined.avg;
            window.productDataStore[productId].reviews = combined.count;
        }
    } catch (err) {
        console.error('Error updating product store:', err);
    }
}

function loadReviews() {
    if (!productId) return;
    renderRatingSummary(productId);
    renderReviewsList(productId);
    
    const form = document.getElementById('reviewForm');
    if (form) {
        form.removeEventListener('submit', handleReviewSubmit);
        form.addEventListener('submit', handleReviewSubmit);
    }
    initInteractiveStars();
}

// render helper for external array (server+local)
function renderReviewsListFromArray(arr) {
    const listEl = document.getElementById('reviewsList');
    if (!listEl) return;
    if (!arr || arr.length === 0) {
        listEl.innerHTML = '<p style="color:#666;">Belum ada ulasan. Jadilah yang pertama!</p>';
        return;
    }
    listEl.innerHTML = '';
    arr.slice().reverse().forEach(r => {
        const div = document.createElement('div');
        div.style.padding = '10px 0';
        div.style.borderBottom = '1px solid #f0f0f0';
        const stars = (typeof renderStars === 'function') ? renderStars(r.rating) : `${r.rating}★`;
        const when = new Date(r.date).toLocaleString();
        div.innerHTML = `<div style="font-size:14px; color:#333;">${stars}
              <small style="color:#999;margin-left:8px;">${when}</small></div>
              <div style="margin-top:6px; color:#222;">${r.comment ? escapeHtml(r.comment) : ''}</div>`;
        listEl.appendChild(div);
    });
}

// Interactive stars
function initInteractiveStars() {
    const container = document.getElementById('starRating');
    if (!container) return;
    const stars = Array.from(container.querySelectorAll('.star'));
    function highlight(count) {
        stars.forEach(s => {
            const v = parseInt(s.getAttribute('data-value'), 10);
            s.classList.toggle('hover', v <= count);
        });
    }
    function select(count) {
        container.setAttribute('data-value', count);
        stars.forEach(s => {
            const v = parseInt(s.getAttribute('data-value'), 10);
            s.classList.toggle('selected', v <= count);
        });
    }
    stars.forEach(s => {
        const v = parseInt(s.getAttribute('data-value'), 10);
        s.addEventListener('mouseover', () => highlight(v));
        s.addEventListener('mouseout', () => highlight(0));
        s.addEventListener('click', () => select(v));
    });
}

// Backend sync functions
function fetchReviewsFromServer(id) {
    return new Promise((resolve, reject) => {
        if (!id) return reject();
        fetch('/api/reviews?productId=' + encodeURIComponent(id)).then(r => {
            if (!r.ok) return reject();
            return r.json();
        }).then(js => resolve(js)).catch(reject);
    });
}

function postReviewToServer(id, review) {
    return new Promise((resolve, reject) => {
        if (!id) return reject();
        fetch('/api/reviews', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.assign({ productId: id }, review))
        }).then(r => {
            if (!r.ok) return reject();
            return r.json();
        }).then(js => resolve(js)).catch(reject);
    });
}

function queuePendingReview(id, review) {
    try {
        const key = 'pending_reviews_' + id;
        const arr = JSON.parse(localStorage.getItem(key) || '[]');
        arr.push(review);
        localStorage.setItem(key, JSON.stringify(arr));
    } catch (e) { }
}

function flushPendingReviews(id) {
    try {
        const key = 'pending_reviews_' + id;
        const arr = JSON.parse(localStorage.getItem(key) || '[]');
        if (!arr || arr.length === 0) return;
        // send sequentially
        (async function sendAll() {
            for (const r of arr.slice()) {
                try {
                    await postReviewToServer(id, r);
                    // remove one by one
                    const current = JSON.parse(localStorage.getItem(key) || '[]');
                    current.shift();
                    localStorage.setItem(key, JSON.stringify(current));
                } catch (e) {
                    break; // stop if any fails
                }
            }
        })();
    } catch (e) { }
}

// Load on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProduct();
    loadReviews();
});
