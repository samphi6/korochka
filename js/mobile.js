const hamburger = document.getElementsByClassName('hamburger');
const topnav = document.getElementsByClassName('topnav');

hamburger.addEventListener('click', () => {
    topnav.classList.toggle('show');

});