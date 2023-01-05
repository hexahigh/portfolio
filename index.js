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


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBiJ7Z2d3uZk8C72FicQmw9Et4CECbz9Oc",
    authDomain: "portfolio-website-373808.firebaseapp.com",
    projectId: "portfolio-website-373808",
    storageBucket: "portfolio-website-373808.appspot.com",
    messagingSenderId: "17007828978",
    appId: "1:17007828978:web:3c794a36e04e00cf53d56b",
    measurementId: "G-1QQ6H2956Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBiJ7Z2d3uZk8C72FicQmw9Et4CECbz9Oc",
    authDomain: "portfolio-website-373808.firebaseapp.com",
    projectId: "portfolio-website-373808",
    storageBucket: "portfolio-website-373808.appspot.com",
    messagingSenderId: "17007828978",
    appId: "1:17007828978:web:3c794a36e04e00cf53d56b",
    measurementId: "G-1QQ6H2956Z"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var message = getInputVal('contact-form-message');
  
    // Save message
    saveMessage(name, subject, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, subject, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      subject: subject,
      email: email,
      phone: phone,
      message: message
    });
  }
  