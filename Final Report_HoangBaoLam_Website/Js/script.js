// script.js

// Sample product data (combined from all categories)
const allProducts = [
    //Bracelets
    { id: 1, name: "Mystic Moon Bracelet", category: "bracelets", price: 1350000, image: "../Product_Picture/Bracelets/Type_1.jpg" },
    { id: 2, name: "Coral Bloom Bracelet", category: "bracelets", price: 1600000, image: "../Product_Picture/Bracelets/Type_2.jpg" },
    { id: 3, name: "Timeless Knot Bracelet", category: "bracelets", price: 1900000, image: "../Product_Picture/Bracelets/Type_3.jpg" },
    { id: 4, name: "Aurora Crystal Bracelet", category: "bracelets", price: 2100000, image: "../Product_Picture/Bracelets/Type_4.jpg" },
    { id: 5, name: "Sunburst Charm Bracelet", category: "bracelets", price: 2300000, image: "../Product_Picture/Bracelets/Type_5.jpg" },
    
    //Necklaces
    { id: 20, name: "Morning Dew Necklace", category: "necklaces", price: 1650000, image: "../Product_Picture/Necklaces/Type_1.jpg" },
    { id: 21, name: "Sapphire Gaze Necklace", category: "necklaces", price: 1700000, image: "../Product_Picture/Necklaces/Type_2.jpg" },
    { id: 22, name: "Lunar Beam Necklace", category: "necklaces", price: 1750000, image: "../Product_Picture/Necklaces/Type_3.jpg" },
    { id: 23, name: "Crimson Heart Necklace", category: "necklaces", price: 1800000, image: "../Product_Picture/Necklaces/Type_4.jpg" },
    { id: 24, name: "Blush Rose Necklace", category: "necklaces", price: 1850000, image: "../Product_Picture/Necklaces/Type_5.jpg" },
    { id: 25, name: "Eternity Loop Necklace", category: "necklaces", price: 1900000, image: "../Product_Picture/Necklaces/Type_6.jpg" },
    { id: 26, name: "Aqua Drop Necklace", category: "necklaces", price: 1950000, image: "../Product_Picture/Necklaces/Type_7.jpg" },
    { id: 27, name: "Soaring Wing Necklace", category: "necklaces", price: 2000000, image: "../Product_Picture/Necklaces/Type_8.jpg" },
    { id: 28, name: "Ivory Pearl Necklace", category: "necklaces", price: 2050000, image: "../Product_Picture/Necklaces/Type_9.jpg" },
    { id: 29, name: "Radiant Metal Necklace", category: "necklaces", price: 2100000, image: "../Product_Picture/Necklaces/Type_10.jpg" },
    { id: 30, name: "Celestial Circle Necklace", category: "necklaces", price: 2150000, image: "../Product_Picture/Necklaces/Type_11.jpg" },
    { id: 31, name: "Mini Bead Necklace", category: "necklaces", price: 2200000, image: "../Product_Picture/Necklaces/Type_12.jpg" },
    { id: 32, name: "Sacred Cross Necklace", category: "necklaces", price: 2250000, image: "../Product_Picture/Necklaces/Type_13.jpg" },
    { id: 33, name: "Golden Blossom Necklace", category: "necklaces", price: 2300000, image: "../Product_Picture/Necklaces/Type_14.jpg" },
    
    //Earring
    { id: 6, name: "Cherry Blossom Earrings", category: "earrings", price: 850000, image: "../Product_Picture/Earrings/Type_1.jpg" },
    { id: 7, name: "Sunlit Hoop Earrings", category: "earrings", price: 900000, image: "../Product_Picture/Earrings/Type_2.jpg" },
    { id: 8, name: "Crystal Dew Earrings", category: "earrings", price: 950000, image: "../Product_Picture/Earrings/Type_3.jpg" },
    { id: 9, name: "Tiny Comet Earrings", category: "earrings", price: 1000000, image: "../Product_Picture/Earrings/Type_4.jpg" },
    { id: 10, name: "Monarch Wing Earrings", category: "earrings", price: 1050000, image: "../Product_Picture/Earrings/Type_5.jpg" },
    { id: 11, name: "Golden Petal Earrings", category: "earrings", price: 1100000, image: "../Product_Picture/Earrings/Type_6.jpg" },
    { id: 12, name: "Rose Quartz Earrings", category: "earrings", price: 1150000, image: "../Product_Picture/Earrings/Type_7.jpg" },
    { id: 13, name: "Ocean Drop Earrings", category: "earrings", price: 1200000, image: "../Product_Picture/Earrings/Type_8.jpg" },
    { id: 14, name: "Cream Pearl Earrings", category: "earrings", price: 1250000, image: "../Product_Picture/Earrings/Type_9.jpg" },
    { id: 15, name: "Floral Diamond Earrings", category: "earrings", price: 1300000, image: "../Product_Picture/Earrings/Type_10.jpg" },
    { id: 16, name: "Sweet Bow Earrings", category: "earrings", price: 1350000, image: "../Product_Picture/Earrings/Type_11.jpg" },
    { id: 17, name: "Chrome Shine Earrings", category: "earrings", price: 1400000, image: "../Product_Picture/Earrings/Type_12.jpg" },
    { id: 18, name: "Bold Hoop Earrings", category: "earrings", price: 1450000, image: "../Product_Picture/Earrings/Type_13.jpg" },
    { id: 19, name: "Giant Dewdrop Earrings", category: "earrings", price: 1500000, image: "../Product_Picture/Earrings/Type_14.jpg" },
    
    // Diamond Rings
    { id: 34, name: "Stellar Diamond Ring", category: "rings", price: 3150000, image: "../Product_Picture/Rings/Diamond_rings/Type_1.jpg" },
    { id: 35, name: "Infinity Diamond Ring", category: "rings", price: 3250000, image: "../Product_Picture/Rings/Diamond_rings/Type_2.jpg" },
    { id: 36, name: "Graceful Diamond Ring", category: "rings", price: 3350000, image: "../Product_Picture/Rings/Diamond_rings/Type_3.jpg" },
    { id: 37, name: "Luminous Diamond Ring", category: "rings", price: 3450000, image: "../Product_Picture/Rings/Diamond_rings/Type_4.jpg" },
    { id: 38, name: "Dazzling Diamond Ring", category: "rings", price: 3550000, image: "../Product_Picture/Rings/Diamond_rings/Type_5.jpg" },
    { id: 39, name: "Gilded Diamond Ring", category: "rings", price: 3650000, image: "../Product_Picture/Rings/Diamond_rings/Type_6.jpg" },
    { id: 40, name: "Majestic Diamond Ring", category: "rings", price: 3750000, image: "../Product_Picture/Rings/Diamond_rings/Type_7.jpg" },
    
    // Gold Rings
    { id: 41, name: "Textured Gold Ring", category: "rings", price: 2650000, image: "../Product_Picture/Rings/Gold_rings/Type_1.jpg" },
    { id: 42, name: "Timeless Gold Ring", category: "rings", price: 2750000, image: "../Product_Picture/Rings/Gold_rings/Type_2.jpg" },
    { id: 43, name: "Sleek Gold Ring", category: "rings", price: 2850000, image: "../Product_Picture/Rings/Gold_rings/Type_3.jpg" },
    { id: 44, name: "Beloved Gold Ring", category: "rings", price: 2950000, image: "../Product_Picture/Rings/Gold_rings/Type_4.jpg" },
    
    
    // Silver Rings
    { id: 45, name: "Dusk Silver Ring", category: "rings", price: 2150000, image: "../Product_Picture/Rings/Silver_rings/Type_1.jpg" },
    { id: 46, name: "Woven Silver Ring", category: "rings", price: 2250000, image: "../Product_Picture/Rings/Silver_rings/Type_2.jpg" },
    { id: 47, name: "Pearl Silver Ring", category: "rings", price: 2350000, image: "../Product_Picture/Rings/Silver_rings/Type_3.jpg" },
    { id: 48, name: "Basic Silver Ring", category: "rings", price: 2450000, image: "../Product_Picture/Rings/Silver_rings/Type_4.jpg" },
];

// Function to check if user is logged in
function checkLogin() {
    return localStorage.getItem('loggedIn') === 'true';
}

// Function to log out
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('cart'); // Xóa giỏ hàng khi đăng xuất
    showNotification('You have been logged out!', () => {
        window.location.href = '../HTML/MainPage.html';
    });
}

// Function to add product to cart
function addToCart(product) {
    if (!checkLogin()) {
        showNotification('Please login to add products to your cart!', () => {
            window.location.href = '../HTML/LoginRegister.html';
        });
        return;
    }

    if (!product || !product.name) {
        showNotification("Error: Product information is missing!");
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} has been added to your cart!`);
}

// Function to update cart count in header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cart.length;
    }
}

// Function to update user status links
function updateUserStatusLinks() {
    const userStatusLink = document.getElementById('user-status');
    const logoutBtn = document.getElementById('logout-btn');
    const isLoggedIn = checkLogin();

    // Cập nhật liên kết trong user-cart
    if (userStatusLink) {
        userStatusLink.textContent = isLoggedIn ? 'Personal Information' : 'Login | Register';
        userStatusLink.href = isLoggedIn ? '../HTML/PersonalInfo.html' : '../HTML/LoginRegister.html';
    }

    // Hiển thị/ẩn nút đăng xuất
    if (logoutBtn) {
        logoutBtn.style.display = isLoggedIn ? 'inline' : 'none';
        logoutBtn.addEventListener('click', (event) => {
            event.preventDefault();
            logout();
        });
    }
}

// Function to display featured products on MainPage.html
function displayFeaturedProducts() {
    const productList = document.getElementById('featured-products');
    if (productList) {
        productList.innerHTML = '';
        const featuredProducts = allProducts.slice(0, 4); // Hiển thị 4 sản phẩm đầu tiên
        featuredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/150x150?text=Placeholder'">
                <h4>${product.name}</h4>
                <p>${product.price.toLocaleString('en-US')} VND</p>
                <button class="action-btn" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Cập nhật trạng thái đăng nhập và số lượng giỏ hàng
    updateUserStatusLinks();
    updateCartCount();

    // Hiển thị sản phẩm nổi bật trên MainPage.html
    if (window.location.pathname.includes('MainPage.html')) {
        displayFeaturedProducts();
    }

    // Gắn sự kiện cho các nút "Add to Cart" (nếu có class add-to-cart-btn)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                name: button.dataset.name,
                price: parseInt(button.dataset.price),
                image: button.dataset.image
            };
            addToCart(product);
        });
    });
});