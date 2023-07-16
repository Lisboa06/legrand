document.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 60) {
      document.querySelector("header").classList.add("header-onScroll");
      document.querySelector(".menu-icon").classList.add("menu-icon-onScroll");
    } else {
      document.querySelector("header").classList.remove("header-onScroll");
      document.querySelector(".menu-icon").classList.remove("menu-icon-onScroll");
    }
});


// var menuOpen = document.querySelector('.menu-open');
// var ulMenu = document.querySelector('.mobile-nav-list ul');
// menuOpen.addEventListener('click', function() {
//     // Verifica se a tag ul está visível
//     if (ulMenu.style.display !== 'flex') {
//         // Oculta a tag ul
//         ulMenu.style.index = 'flex';
//     } else {
//         // Exibe a tag ul
//         ulMenu.style.display = 'none';
//     }
// });

const menuOpenButton = document.querySelector('.menu-open');
const menuItemsContainer = document.querySelector('#menuItems');
let menuOpen = false;
menuItemsContainer.style.height = '0';
menuItemsContainer.style.display = 'none';

menuOpenButton.addEventListener('click', () => {
  if (menuOpen) {
    menuItemsContainer.style.height = '0';
    menuItemsContainer.style.opacity = '0';
    setTimeout(() => {
      menuItemsContainer.style.display = 'none';
    }, 65);
    menuOpen = false;
  } else {
    menuItemsContainer.style.display = 'flex';
    const menuHeight = menuItemsContainer.scrollHeight + 'px';
    menuItemsContainer.style.height = menuHeight;
    setTimeout(() => {
      menuItemsContainer.style.opacity = '1';
    }, 0);
    menuOpen = true;
  }
});

var navLinks = document.querySelectorAll('.nav-bar a[href^="#"]');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var id = this.getAttribute('href');
    var targetOffset = document.querySelector(id).offsetTop;
    
    window.scrollTo({
      top: targetOffset - 30,
      behavior: 'smooth'
    });
  });
});