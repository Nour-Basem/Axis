const myphoto = document.querySelector(".images img");
const mytext=document.getElementById("description");
myphoto.onclick = function(){
    if(mytext.style.display==="none"||mytext.style.display===""){
        mytext.style.display="block";
    }
    else{
        mytext.style.display="none";
    }
}