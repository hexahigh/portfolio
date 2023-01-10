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
        //Load the vpnlist
         var txtFile = new XMLHttpRequest();
         txtFile.open("GET", "vpnip.txt", true);
         txtFile.onreadystatechange = function() {
       if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
             if (txtFile.status === 200) {  // Makes sure it's found the file.
             allText = txtFile.responseText;
               lines = txtFile.responseText.split("\r\n"); // Will separate each line into an array
         } //"\r\n" 
       }
 }
        var vpniplist = [];
        var usedvpn = false;
        //add the vpnlist to a array and split it
        vpniplist = allText.split(/\r\n|\n/);
        if (vpniplist.includes(data.ip)) {
            var usedvpn = true
        }
        //Put the values into the form
        document.getElementById("formip").value = (data.ip);
        document.getElementById("usedvpn").value = usedvpn;
})