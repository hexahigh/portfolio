const ip = $.getJSON("https://europe-central2-portfolio-website-374313.cloudfunctions.net/getip")
const ua = Navigator.userAgent
const page = window.location


const url = "https://boofdev.eu/api/analytics?ip=" + ip + "&ua=" + ua + "&page=" + page

fetch(url);