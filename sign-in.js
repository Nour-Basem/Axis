


const themeBtn = document.getElementById('themetoggle');
const icon = document.getElementById('themeicon');
const image = document.getElementById('mainImage');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
        image.src = "sign_in/dark.jpg"; 
} else {
    image.src = "sign_in/light.jpg"; 
}



themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    let theme = 'light';

    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
          image.src = "sign_in/dark.jpg";
        theme = 'dark';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        image.src = "sign_in/light.jpg"; 
        icon.style.color = "";
        theme = 'light';
    }


    localStorage.setItem('theme', theme);
});
function saveData() {
  let email = document.getElementById("email").value;
  let remember = document.getElementById("remember").checked;

  if (remember) {
    localStorage.setItem("userEmail", email);
  } else {
    localStorage.removeItem("userEmail");
  }
}

window.onload = function () {
  let savedEmail = localStorage.getItem("userEmail");

  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
    document.getElementById("remember").checked = true;
  }
};