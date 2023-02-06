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
            formid = document.getElementById("formid")
            formid.setAttribute('action', 'blocked');
            isblocked = true
        } else {
            isblocked = false
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#formid')
    const addButton = document.querySelector('#submitbutton')
    //const updateButton = document.querySelector('#updateAddress')
  
    addButton && addButton.addEventListener('click', (e) => {
      e.preventDefault()
  
      if (!form.checkValidity()) {
        return
      }
  
      fetch('https://22242122.sibforms.com/serve/MUIEAHVHFKo30-l0E7GWm__Ik0lHwyITHmXyb-UlUlgD1PqMJAHk5jlFRp9cZ3HXLy2ZJNBL3ytPvMl5Mp8JrTbMgZnZqYYW4OXIzkk8QoL0OJIgUUdmiv98dF8bBDJGTDYsQormUfVvOCCkPusdemllOZytuSWnKnqdv1t16bJtsXQh3lYAIIWUXj7xdZixAMlS3mAIGgLaVCLr', { method: 'POST', body: new FormData(form) })
        .then((r => r.json()))
        .then(console.log)
    })
    
    /*updateButton && updateButton.addEventListener('click', (e) => {
      e.preventDefault()
  
      if (!form.checkValidity()) {
        return
      }
  
      fetch('/updateAddress', { method: 'POST', body: new FormData(form) })
        .then((r => r.json()))
        .then(console.log)
    })*/
  })