
const allimages = document.querySelectorAll('.skin-img');
allimages.forEach(img=>{
    img.onclick=function(){
        const parent = this.parentElement;
        const desc =parent.querySelector('.description');
        if(desc.style.display==="none"||desc.style.display===""){
            desc.style.display="block";
        }
        else{
            desc.style.display="none";
        }
    }
}

)

