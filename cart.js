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
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cart-items");

if (cart.length === 0) {
    container.innerHTML = "<p>Cart is empty </p>";
} else {
    cart.forEach(item => {
        let div = document.createElement("div");

        div.innerHTML = `
            <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
                <img src="${item.image}" width="100">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                </div>
            </div>
            <hr>
        `;

        container.appendChild(div);
    });
}