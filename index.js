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

var userip = 0

//Get user ip to put it in the contact form
//Also check if they are using a vpn
$.getJSON("https://europe-central2-portfolio-website-374313.cloudfunctions.net/getip", function(data) {
    userip = (data.ip);
    document.getElementById("formip").value = (data.ip);
    fetch('vpnip.txt')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
        const decoder = new TextDecoder('utf-8');
        const data = decoder.decode(new Uint8Array(arrayBuffer));
        const array = data.split('\n');
        //console.log(array);
        var usedvpn = false;
        if (array.includes(userip)) {
            var usedvpn = true
        } else {
            var usedvpn = false;
        }
        document.getElementById("usedvpn").value = usedvpn;
    })
    .catch(error => console.error(error));
 })

window.onload = function blockform() {
    fetch('https://hexahigh.github.io/cdn/Text/blockedformip.txt')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
        const decoder = new TextDecoder('utf-8');
        const data = decoder.decode(new Uint8Array(arrayBuffer));
        const array = data.split('\n');
        //console.log(array);
        var isblocked = false;
        if (array.includes(userip)) {
            submitbutton = document.getElementById("submitbutton")
            submitbutton.setAttribute('type', 'button');
            submitbutton.innerText = "Your ip is blocked";
            isblocked = true
        } else {
            isblocked = false
        }
    })
}