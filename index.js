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


//Get user ip to put it in the contact form

$.getJSON("https://api.ipify.org?format=json", function(data) {
 })
var userip = (data.ip);
 fetch('vpnip.txt')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
        const decoder = new TextDecoder('utf-8');
        const data = decoder.decode(new Uint8Array(arrayBuffer));
        const array = data.split('\n');
        console.log(array);
    })
    .catch(error => console.error(error));

        //var vpniplist = allText.split(/\r\n|\n/);
        //var vpniplist = [];
        var usedvpn = false;
        //add the vpnlist to a array and split it
            if (array.includes(userip)) {
                var usedvpn = true
            }
        //Put the values into the form
        document.getElementById("formip").value = (data.ip);
        document.getElementById("usedvpn").value = usedvpn;