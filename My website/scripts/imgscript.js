let imgdiv = document.getElementById("imagediv");
let img = imgdiv.firstElementChild;
let opacity = 0.0;

setInterval(function() {
    if (opacity >= 1.0){
        opacity = 0.0;
    }
    img.style.opacity = `${opacity}`
    opacity += 0.1;
}, 500);