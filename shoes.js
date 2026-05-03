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
 document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const productCards = document.querySelectorAll('.shoes-card');
    const noResult = document.querySelector('noResult');

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();
        let foundCount = 0;

        productCards.forEach(function (card) {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                card.classList.remove('hide');
                foundCount++;
            } else {
                card.classList.add('hide');
            }
        });


    });
});


