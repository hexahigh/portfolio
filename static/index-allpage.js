// Set delay to ms
function delay(milliseconds){
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
  
var CurrentPage = document.querySelector('meta[name="CurrentPage"]').content

function scrollTop() {
    const scrollBtn = document.querySelector('.scrollTop');
    if(this.scrollY >= 90) scrollBtn.classList.add('scrollTop-show'); else scrollBtn.classList.remove('scrollTop-show');
}
window.addEventListener('scroll', scrollTop);

var navMobileContentClose = document.querySelector('.nav-mobile-content-close');
var navMenu = document.querySelector('#nav-menu');
var navMenuImg = document.querySelector('#nav-menu-img');

function navShow() {
    if (navMobileContentClose.classList.contains('nav-mobile-content')) {
        navMobileContentClose.classList.remove('nav-mobile-content');
        if(CurrentPage == "projects", "about", "news") {
            navMenuImg.src = '../data/images/menu.svg';
        } else {
            navMenuImg.src = 'data/images/menu.svg';
            console.log("you are on the homepage")
        }
    } else {
        navMobileContentClose.classList.toggle('nav-mobile-content');
        if(CurrentPage == "projects", "about", "news") {
            navMenuImg.src = '../data/images/close.svg';
        } else {
            navMenuImg.src = 'data/images/close.svg';
            console.log("you are on the homepage")
        }
    }
}

navMenu.addEventListener('click', navShow);

var year = new Date().getFullYear();

document.querySelector('.current-year').innerText = year;