// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display cart items
    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="images/${item.name.toLowerCase().replace(/ /g, '-')}.jpg" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description || 'Delicious dish'}</p>
                </div>
                <span class="price">$${item.price}</span>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;

            cartItemsContainer.appendChild(cartItem);
            totalPrice += parseFloat(item.price);
        });

        // Update total price
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Remove item from cart
    function removeItemFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    // Event listener for remove buttons
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.getAttribute('data-index');
            removeItemFromCart(index);
        }
    });

    // Display cart items on page load
    displayCartItems();
});