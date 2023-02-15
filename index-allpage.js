// Set delay to ms
function delay(milliseconds){
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
  

function scrollTop() {
    const scrollBtn = document.querySelector('.scrollTop');
    if(this.scrollY >= 90) scrollBtn.classList.add('scrollTop-show'); else scrollBtn.classList.remove('scrollTop-show');
}
window.addEventListener('scroll', scrollTop);

const navMobileContentClose = document.querySelector('.nav-mobile-content-close');
const navMenu = document.querySelector('#nav-menu');
const navMenuImg = document.querySelector('#nav-menu-img');

function navShow() {
    if (navMobileContentClose.classList.contains('nav-mobile-content')) {
        navMobileContentClose.classList.remove('nav-mobile-content');
        navMenuImg.src = '/data/images/menu.svg';
    } else {
        navMobileContentClose.classList.toggle('nav-mobile-content');
        navMenuImg.src = '/data/images/close.svg';
    }
}

navMenu.addEventListener('click', navShow);

const year = new Date().getFullYear();

document.querySelector('.current-year').innerText = year;


window.onload = async function removemailchimpthing() {
    while (true) {
        await delay(100)
        const mailchimpcredits = document.getElementsByClassName("poweredWrapper");
        if (mailchimpcredits.length > 0) {
            mailchimpcredits[0].remove();
        }
    }
}
