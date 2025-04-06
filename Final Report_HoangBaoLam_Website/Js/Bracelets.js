// Js/Bracelets.js

const bracelets = [
    { id: 1, name: "Mystic Moon Bracelet", category: "bracelets", price: 1350000, image: "../Product_Picture/Bracelets/Type_1.jpg" },
    { id: 2, name: "Coral Bloom Bracelet", category: "bracelets", price: 1600000, image: "../Product_Picture/Bracelets/Type_2.jpg" },
    { id: 3, name: "Timeless Knot Bracelet", category: "bracelets", price: 1900000, image: "../Product_Picture/Bracelets/Type_3.jpg" },
    { id: 4, name: "Aurora Crystal Bracelet", category: "bracelets", price: 2100000, image: "../Product_Picture/Bracelets/Type_4.jpg" },
    { id: 5, name: "Sunburst Charm Bracelet", category: "bracelets", price: 2300000, image: "../Product_Picture/Bracelets/Type_5.jpg" },
];
// Functionality for adding a product to the shopping cart
function addItemToCart(productDetails) {
    if (!productDetails || !productDetails.name) {
        displayNotification("Error: Could not add item. Product information is incomplete.");
        return;
    }

    let shoppingCart = JSON.parse(localStorage.getItem('cart')) || [];
    shoppingCart.push(productDetails);
    localStorage.setItem('cart', JSON.stringify(shoppingCart));
    updateShoppingCartBadge();
    displayNotification(`${productDetails.name} has been successfully added to your cart!`);
}

// Utility function to check if a user is currently logged in
const isUserLoggedIn = () => localStorage.getItem('email') !== null;

// Function to refresh the cart item count displayed in the header
function updateShoppingCartBadge() {
    const cartCounterElement = document.getElementById('cart-count');
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartCounterElement) {
        cartCounterElement.textContent = currentCart.length;
    }
}

// Event listener to execute scripts after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the cart count on initial page load
    updateShoppingCartBadge();

    // Logic for populating featured products specifically on MainPage.html
    if (window.location.pathname.includes('MainPage.html')) {
        const featuredProductsContainer = document.getElementById('featured-products');
        if (featuredProductsContainer) {
            featuredProductsContainer.innerHTML = '';
            const topFeaturedProducts = allProducts.slice(0, 4); // Select the first 4 products as featured items
            topFeaturedProducts.forEach(productInfo => {
                const productCard = document.createElement('div');
                productCard.className = 'product-item';
                productCard.innerHTML = `
                    <img src="${productInfo.image}" alt="${productInfo.name}">
                    <h4>${productInfo.name}</h4>
                    <p>${new Intl.NumberFormat('en-US').format(productInfo.price)} VND</p>
                    <button class="action-btn" onclick='addItemToCart(${JSON.stringify(productInfo)})'>Add to Cart</button>
                `;
                featuredProductsContainer.appendChild(productCard);
            });
        }
    }

    // Logic for populating and filtering all products on Products.html
    if (window.location.pathname.includes('Products.html')) {
        const productsDisplayArea = document.getElementById('product-list');
        const categorySelector = document.getElementById('category-filter');
        const sortSelector = document.getElementById('sort-filter');

        // Function to render the product list on the UI
        const renderProducts = (productList) => {
            productsDisplayArea.innerHTML = '';
            productList.forEach(item => {
                const productCard = document.createElement('div');
                productCard.className = 'product-item';
                productCard.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h4>${item.name}</h4>
                    <p>${new Intl.NumberFormat('en-US').format(item.price)} VND</p>
                    <button class="action-btn" onclick='addItemToCart(${JSON.stringify(item)})'>Add to Cart</button>
                `;
                productsDisplayArea.appendChild(productCard);
            });
        };

        // Initial rendering of all products
        renderProducts(allProducts);

        // Event listener for category filtering
        categorySelector.addEventListener('change', () => {
            const selectedCategory = categorySelector.value;
            let filteredItems = selectedCategory === 'all' ? allProducts : allProducts.filter(product => product.category === selectedCategory);
            const currentSortOrder = sortSelector.value;
            if (currentSortOrder === 'low-to-high') {
                filteredItems.sort((a, b) => a.price - b.price);
            } else if (currentSortOrder === 'high-to-low') {
                filteredItems.sort((a, b) => b.price - a.price);
            }
            renderProducts(filteredItems);
        });

        // Event listener for price sorting
        sortSelector.addEventListener('change', () => {
            const selectedCategory = categorySelector.value;
            let filteredItems = selectedCategory === 'all' ? allProducts : allProducts.filter(product => product.category === selectedCategory);
            const selectedSortOrder = sortSelector.value;
            if (selectedSortOrder === 'low-to-high') {
                filteredItems.sort((a, b) => a.price - b.price);
            } else if (selectedSortOrder === 'high-to-low') {
                filteredItems.sort((a, b) => b.price - a.price);
            }
            renderProducts(filteredItems);
        });
    }
});