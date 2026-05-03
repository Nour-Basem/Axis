// 1. قراءة العدد من الذاكرة
let count = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;

// 2. تحديث الشكل أول ما الصفحة تفتح
document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
});

// 3. دالة الإضافة (مدمجة ومنظمة)
function addToCart() {
    count++;
    saveAndRefresh();
    
    // أنيميشن الإضافة
    const el = document.getElementById('cart-count');
    if(el) {
        el.style.transform = "scale(1.3)";
        setTimeout(() => el.style.transform = "scale(1)", 200);
    }
}

// 4. دالة المسح (اللي كانت مابتنقصش)
function removeFromCart() {
    if (count > 0) {
        count--;
        saveAndRefresh();
    }
}

// 5. دالة التوفير والتحديث
function saveAndRefresh() {
    localStorage.setItem('cartCount', count);
    updateCartUI();
}

// 6. دالة تحديث الواجهة
function updateCartUI() {
    const cartCountElement = document.getElementById('cart-count');
    if(cartCountElement) {
        cartCountElement.innerText = count;
        
        if (count === 0) {
            cartCountElement.style.display = "none";
        } else {
            cartCountElement.style.display = "flex";
        }
    }
}

function clearCart() {
    count = 0;
    saveAndRefresh();
}