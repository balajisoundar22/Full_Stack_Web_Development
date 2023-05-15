var cartCount = 0;
var cartItems = [];

function addToCart(productId) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    
    // Add the product to the cartItems array
    var product = { id: productId, name: "Product " + productId, price: 10.99 };
    cartItems.push(product);
}

function goToCart() {
    // Store the cartItems array in localStorage to pass it to the cart page
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Navigate to the cart page
    window.location.href = 'cart.html';
}