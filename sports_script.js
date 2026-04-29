let buttons = document.querySelectorAll(".cart-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        let product = btn.closest("section");

        let item = {
            name: product.querySelector("h3").innerText,
            price: product.querySelector(".new").innerText,
            image: product.querySelector("img").src
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(item);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to cart!");
    });
});