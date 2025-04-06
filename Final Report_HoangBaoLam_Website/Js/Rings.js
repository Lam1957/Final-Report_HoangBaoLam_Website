// Js/Rings.js

const rings = [
// Diamond Rings
{ id: 34, name: "Stellar Diamond Ring", category: "rings", price: 3150000, image: "../Product_Picture/Rings/Diamond_ringss/Type_1.jpg" },
{ id: 35, name: "Infinity Diamond Ring", category: "rings", price: 3250000, image: "../Product_Picture/Rings/Diamond_ringss/Type_2.jpg" },
{ id: 36, name: "Graceful Diamond Ring", category: "rings", price: 3350000, image: "../Product_Picture/Rings/Diamond_ringss/Type_3.jpg" },
{ id: 37, name: "Luminous Diamond Ring", category: "rings", price: 3450000, image: "../Product_Picture/Rings/Diamond_ringss/Type_4.jpg" },
{ id: 38, name: "Dazzling Diamond Ring", category: "rings", price: 3550000, image: "../Product_Picture/Rings/Diamond_ringss/Type_5.jpg" },
{ id: 39, name: "Gilded Diamond Ring", category: "rings", price: 3650000, image: "../Product_Picture/Rings/Diamond_ringss/Type_6.jpg" },
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
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${product.name} has been added to your cart!`);
}
// Js/script.js

// Function to check if user is logged in
function checkLogin() {
    return localStorage.getItem('email') !== null;
}

// Function to add product to cart
function addToCart(product) {
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
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cart.length;
}

document.addEventListener('DOMContentLoaded', () => {
    // Update cart count on page load
    updateCartCount();

    // Populate featured products on MainPage.html
    if (window.location.pathname.includes('MainPage.html')) {
        const productList = document.getElementById('featured-products');
        if (productList) {
            productList.innerHTML = '';
            const featuredProducts = allProducts.slice(0, 4); // Show first 4 products as featured
            featuredProducts.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>${product.price.toLocaleString('en-US')} VND</p>
                    <button class="action-btn" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
                `;
                productList.appendChild(productItem);
            });
        }
    }

    // Populate all products on Products.html
    if (window.location.pathname.includes('Products.html')) {
        const productList = document.getElementById('product-list');
        const categoryFilter = document.getElementById('category-filter');
        const sortFilter = document.getElementById('sort-filter');

        // Function to display products
        const displayProducts = (products) => {
            productList.innerHTML = '';
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>${product.price.toLocaleString('en-US')} VND</p>
                    <button class="action-btn" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
                `;
                productList.appendChild(productItem);
            });
        };

        // Initial display
        displayProducts(allProducts);

        // Handle category filter
        categoryFilter.addEventListener('change', () => {
            const category = categoryFilter.value;
            let filteredProducts = category === 'all' ? allProducts : allProducts.filter(product => product.category === category);
            const sortValue = sortFilter.value;
            if (sortValue === 'low-to-high') {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (sortValue === 'high-to-low') {
                filteredProducts.sort((a, b) => b.price - a.price);
            }
            displayProducts(filteredProducts);
        });

        // Handle sort filter
        sortFilter.addEventListener('change', () => {
            const category = categoryFilter.value;
            let filteredProducts = category === 'all' ? allProducts : allProducts.filter(product => product.category === category);
            const sortValue = sortFilter.value;
            if (sortValue === 'low-to-high') {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (sortValue === 'high-to-low') {
                filteredProducts.sort((a, b) => b.price - a.price);
            }
            displayProducts(filteredProducts);
        });
    }
});