let topNav = document.getElementById("icon-nav");
let searchWrapper = document.getElementById("search-wrapper");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
        topNav.style.backgroundColor = '#232323';
        searchWrapper.style.backgroundColor = '#232323';
        searchWrapper.style.top = 0;
    } else {
        topNav.style.backgroundColor = '';
        topNav.style.top = '55px';
        searchWrapper.style.backgroundColor = '';
    }
}