function menuShow() {
    let menuMobile = document.querySelector('.ul3');
     if ( menuMobile.style.display == "flex") {
        menuMobile.style.display = "none";
    } else {
        menuMobile.style.display = "flex";
    }
}