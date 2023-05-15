        // Retrieve the cartItems from localStorage
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        function removeFromCart(productId) {
            // Remove the product from the cartItems array
            cartItems = cartItems.filter(function(product) {
                return product.id !== productId;
            });
            
            // Refresh the cart display
            refreshCart();
        }
        
        function refreshCart() {
            // Clear the products list
            document.getElementById('products').innerHTML = '';
            
            // Add each product in the cart to the products list
            cartItems.forEach(function(product) {
                var productHtml = '<div class="product">';
                productHtml += '<img src="product' + product.id + '.jpg" alt="' + product.name + '">';
                productHtml += '<h2>' + product.name + '</h2>';
                productHtml += '<p>$' + product.price + '</p>';
                productHtml += '<button class="remove-from-cart" onclick="removeFromCart(' + product.id + ')">Remove from Cart</button>';
                productHtml += '</div>';
                
                document.getElementById('products').insertAdjacentHTML('beforeend', productHtml);
            });
        }
        
        // Initial cart display
        refreshCart();