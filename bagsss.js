let buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {

        let product = btn.closest(".product-card");

        let name = product.querySelector("h3").textContent.trim();
        let price = product.querySelector(".price-bag").textContent.trim();
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
