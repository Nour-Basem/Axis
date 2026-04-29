let cart = JSON.parse(localStorage.getItem("cart")) || [];

let buttons = document.querySelectorAll(".cart-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {

        let product = btn.parentElement;

        let image = product.querySelector("img")?.src;
        let price = product.querySelector(".new")?.innerText;


        let name = "Shoes Product";

        cart.push({ name, price, image });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to cart ");
    });
});