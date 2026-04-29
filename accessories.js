let images = document.querySelectorAll(".product-card img");

images.forEach(function (img) {
    img.addEventListener("click", function () {

        let description = this.parentElement.querySelector("p");

        if (description.style.display === "none" || description.style.display === "") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }
    });
});
let buttons = document.querySelectorAll(".cart-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {

        let product = btn.closest(".product-card");

        let name = product.querySelector("h3").textContent.trim();
        let price = product.querySelector(".new").textContent.trim();
        let image = product.querySelector("img").src;

        let item = {
            name: name,
            price: price,
            image: image
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(item);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to cart");
    });
});
