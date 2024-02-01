let cartItems = [];
let total = 0;

function addToCart(product, price) {
    cartItems.push({ product, price });
    total += price;

    updateCart();
}

function viewCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    if (cartItems.length === 0) {
        alert("Your shopping cart is empty!");
        return;
    }

    let cartDetails = "Shopping Cart:\n";

    cartItems.forEach(item => {
        cartDetails += `${item.product} - $${item.price.toFixed(2)}\n`;
    });

    cartDetails += `\nTotal: $${total.toFixed(2)}`;

    alert(cartDetails);
}

function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    cartItemsElement.innerHTML = "";
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
