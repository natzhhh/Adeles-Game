const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');
if(menuButton){
menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuButton.classList.toggle('rotate');
});
}
function removeClass() {
  menuButton.classList.remove('rotate');
}

document.onscroll = () => {
  if(navbar){
    navbar.classList.remove('show');
    menuButton.classList.remove('rotate');
  
 

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
}
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};
document.getElementById("BingoReal").onclick = function () {
  openFullscreen();
};

function openFullscreen() {
  var elem = document.getElementById("Iframe");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}