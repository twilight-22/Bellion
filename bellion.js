
let cart = JSON.parse(localStorage.getItem("cart")) || [];
// Jangan jalankan updateCartCount() di sini, tunggu DOM siap


// Extended product data with category, rating, and reviews
const productDataStore = {
    sepatu: { name: 'Sepatu Casual Pria', price: 250000, image: 'image/Ortus.jpg', category: 'Fashion', },
    jaket: { name: 'Jaket Premium', price: 180000, image: 'image/jaket.jfif', category: 'Fashion', },
    mouse: { name: 'Mouse Gaming', price: 150000, image: 'image/mouse.jfif', category: 'Elektronik', },
    bd1: { name: 'God Of War (PS4)', price: 170000, image: 'image/gow crot.webp', category: 'Game', },
    bd2: { name: 'Sekiro: Shadows Die Twice', price: 500000, image: 'image/OIP.webp', category: 'Game',  },
    bd3: { name: 'The Last Of Us Part II', price: 250000, image: 'image/tlou.webp', category: 'Game',  },
    bd4: { name: 'World War Zombie', price: 500000, image: 'image/WWZ.webp', category: 'Game' ,  },
    bd5: { name: 'God Of War II', price: 170000, image: 'image/GOW2.jpg', category: 'Game' , }, 
    bd6: { name: 'God Of War III', price: 230000, image: 'image/GOW3.jfif', category: 'Game' ,},
    PS4: { name: 'PlayStation 4 Uncharted 4', price: 3500000, image: 'image/ps4 unchrted4.jpg', category: 'Elektronik', },
    PSVR: { name: 'PlayStation VR', price: 4500000, image: 'image/vr.webp', category: 'Elektronik', },
    SepatuPNTFL: { name: 'Sepatu Pantofel', price: 200000, image: 'image/sepatu pantofel.jpeg', category: 'Fashion', },
    Beras10kilo: { name: 'Beras 10 Kilo', price: 100000, image: 'image/beras.jpeg', category: 'Makanan',  },
    Monitor: { name:'Monitor 24 inch OLED', price: 800000, image: 'image/monitor.avif',category: 'Elektronik', },
    Keyboard: { name:'Keyboard Mechanical Abu-abu', price: 675000, image: 'image/keyboard mechanical.avif',category: 'Elektronik',}, 
    ModemROG: { name:'Modem ROG 1Gbps speed', price: 5000000, image: 'image/modem ROG.webp',category: 'Elektronik',},
    Sweater: { name: 'Sweater Abu-Abu', price: 120000, image: 'image/sweater.avif', category: 'Fashion', },
    CelanaBahanHitam: { name:'Celana Bahan Hitam', price: 150000, image: 'image/celana bahan.jfif',category: 'Fashion',},
    CelanaGunung: { name:'Celana Gunung', price: 220000, image: 'image/celana gunung.jpg',category: 'Fashion',},
};

// expose for other pages/scripts
try { window.productDataStore = productDataStore; } catch (e) { /* ignore */ }

/* TAMBAH BARANG */
function addToCart(name, price, image) {
    let item = cart.find(p => p.name === name);

    if (item) {
        item.qty++;
        if (!item.image && image) item.image = image;
    } else {
        cart.push({ name, price, qty: 1, image: image || null, selected: true });
    }

    saveCart();
    showAddToCartNotification(name);
}

/* KURANGI BARANG */
function removeFromCart(name) {
    let item = cart.find(p => p.name === name);

    if (item) {
        item.qty--;

        if (item.qty <= 0) {
            cart = cart.filter(p => p.name !== name);
        }
    }

    saveCart();
}

/* check out barang */
function checkoutCart() {
    const selectedItems = cart.filter(item => item.selected);
    
    if (selectedItems.length === 0) {
        alert('Pilih minimal 1 barang untuk checkout!');
        return;
    }

    // Redirect ke checkout.html dengan cart data
    window.location.href = 'checkout.html?cart=true';
}


/* SIMPAN */
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
    updateCartTotal();
}

/* JUMLAH TOTAL */
function updateCartCount() {
    let total = cart.reduce((sum, item) => sum + item.qty, 0);
    const el = document.getElementById("cart-count");
    if (el) el.innerText = total;
}

/* TAMPILKAN KERANJANG */
function renderCart() {
    let container = document.getElementById("cart-items");
    if (!container) return;

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#999;">Keranjang kosong</p>';
        return;
    }

    cart.forEach((item, index) => {
        const imgSrc = item.image || 'image/jaket.jfif';
        const isSelected = item.selected ? 'checked' : '';
        
        container.innerHTML += `
            <div class="cart-item">
                <input type="checkbox" class="cart-checkbox" data-index="${index}" ${isSelected} onchange="toggleCartItemSelection(${index})">
                <img src="${imgSrc}" alt="${item.name}">
                <div class="meta">
                    <h4>${item.name}</h4>
                    <p>Harga: Rp ${item.price.toLocaleString('id-ID')} × ${item.qty}</p>
                </div>
                <div class="actions">
                    <button onclick="addToCart('${item.name}', ${item.price}, '${imgSrc.replace("'","\\'")}')">+</button>
                    <button onclick="removeFromCart('${item.name}')">−</button>
                </div>
            </div>
        `;
    });
}

function toggleCartItemSelection(index) {
    if (cart[index]) {
        cart[index].selected = !cart[index].selected;
        saveCart();
        updateCartTotal();
    }
}

function toggleCart() {
    const sidebar = document.querySelector('.cart-sidebar');
    if (!sidebar) return;
    sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
    renderCart();
    updateCartTotal();
}

function updateCartTotal(){
  const selectedItems = cart.filter(item => item.selected);
  const total = selectedItems.reduce((s,i)=>s + i.price * i.qty,0);
  const el = document.getElementById('cart-total');
  if(el) el.innerText = 'Rp ' + total.toLocaleString('id-ID');
}

function belisekarang(nama, harga) {
    window.location.href =
    "checkout.html?nama=" + encodeURIComponent(nama) + "&harga=" + harga;
}

/* ===== FITUR BARU ===== */

// Star rating display
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) stars += '½';
    
    return `<span style="color:#ffc107;font-size:14px;">${stars} (${rating})</span>`;
}

// Show notification when item added to cart
function showAddToCartNotification(itemName) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = `✓ ${itemName} ditambahkan ke keranjang`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Rating reset helpers
function resetRating(productId) {
    if (!productId) return;
    localStorage.removeItem('reviews_' + productId);
    localStorage.removeItem('pending_reviews_' + productId);
    if (window.productDataStore && window.productDataStore[productId]) {
        delete window.productDataStore[productId].rating;
        delete window.productDataStore[productId].reviews;
    }
    console.log('Rating for', productId, 'has been reset.');
}

function resetAllRatings() {
    Object.keys(productDataStore).forEach(id => {
        localStorage.removeItem('reviews_' + id);
        localStorage.removeItem('pending_reviews_' + id);
        if (window.productDataStore && window.productDataStore[id]) {
            delete window.productDataStore[id].rating;
            delete window.productDataStore[id].reviews;
        }
    });
    console.log('All ratings cleared.');
}

// Search and filter products
function initializeSearch() {
    const searchInput = document.getElementById('productSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
}

function filterProducts() {
    const searchTerm = document.getElementById('productSearch')?.value.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || 'all';
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const name = product.querySelector('h3')?.textContent.toLowerCase() || '';
        const productCategory = product.dataset.category || '';
        
        const matchesSearch = name.includes(searchTerm);
        const matchesCategory = category === 'all' || productCategory === category;
        
        product.style.display = (matchesSearch && matchesCategory) ? '' : 'none';
    });
}

// CSS animations
if (!document.querySelector('style[data-notifications]')) {
    const style = document.createElement('style');
    style.setAttribute('data-notifications', 'true');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        .cart-checkbox {
            width: 20px;
            height: 20px;
            cursor: pointer;
            margin-right: 10px;
            accent-color: #f76f00;
        }
        
        #productSearch {
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            width: 250px;
        }
        
        #categoryFilter {
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            background: white;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
});