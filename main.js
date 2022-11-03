let x = false;
function button() {
    if (x == false) {
        document.getElementById('imageNav').src = "icon-close.svg";
        x = true;
    }
    else {
        document.getElementById('imageNav').src = "icon-hamburger.svg";
        x = false;

    }
}



