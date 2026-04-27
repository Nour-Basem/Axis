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

