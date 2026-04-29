const allimages = document.querySelectorAll('.skin-img');
allimages.forEach(img => {
    img.onclick = function () {
        const parent = this.parentElement;
        const desc = parent.querySelector('.description');
        if (desc.style.display === "none" || desc.style.display === "") {
            desc.style.display = "block";
        }
        else {
            desc.style.display = "none";
        }
    }
}

)
const themeBtn = document.getElementById('themetoggle');
const icon = document.getElementById('themeicon');


const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');

}
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    let theme = 'light';

    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');

        theme = 'dark';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        icon.style.color = "";
        theme = 'light';
    }


    localStorage.setItem('theme', theme);
});
let buttons = document.querySelectorAll(".cart-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {

        let product = btn.closest(".images");

        let name = product.querySelector("h3,h2").innerText;
        let price = product.querySelector(".new").innerText;
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


