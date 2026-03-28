document.addEventListener('DOMContentLoaded', () => {
    const cartCountSpan = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    const productButtons = document.querySelectorAll('.product button');
    const clearCartButton = document.getElementById('clear-cart-button');

    let cart = [];

    function updateCartDisplay() {
        cartItemsList.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = '<li style="color: gray;">Koszyk jest pusty.</li>';
            clearCartButton.style.display = 'none';
        } else {
            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - ${item.price.toFixed(2)} zł`;
                cartItemsList.appendChild(li);
                total += item.price;
            });
            clearCartButton.style.display = 'inline-block';
        }

        cartCountSpan.textContent = cart.length;
        totalDisplay.textContent = `Suma: ${total.toFixed(2)} zł`;
    }

    productButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.dataset.productName;
            const productPrice = parseFloat(event.target.dataset.productPrice);

            if (!productName || Number.isNaN(productPrice)) {
                console.warn('Nieprawidłowe dane produktu', event.target.dataset);
                return;
            }

            cart.push({ name: productName, price: productPrice });
            updateCartDisplay();
        });
    });

    clearCartButton.addEventListener('click', () => {
        cart = [];
        updateCartDisplay();
    });

    updateCartDisplay();
});
