const ip = $.getJSON("https://europe-central2-portfolio-website-374313.cloudfunctions.net/getip").ip
const ua = window.navigator.userAgent
const page = window.location


const url = "https://boofdev.eu/api/analytics?ip=" + ip + "&ua=" + ua + "&url=" + page

fetch(url);