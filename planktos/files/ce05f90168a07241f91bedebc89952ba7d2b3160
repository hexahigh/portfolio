const formbutton = document.getElementById("emailformbutton");
const emailformoverlay = document.getElementById("email-form-overlay");
const emailformpopup = document.getElementById("email-form-popup");

formbutton.addEventListener("click", function () {
  emailformoverlay.style.display = "block";
  emailformpopup.style.display = "block";
  // Show our element, then call our callback
  $("#email-form-popup").show(function(){
    // Find the iframes within our newly-visible element
    $(this).find("iframe").prop("src", function(){
      // Set their src attribute to the value of data-src
      return $(this).data("src");
    });
  });

});

emailformoverlay.addEventListener("click", function () {
  emailformoverlay.style.display = "none";
  emailformpopup.style.display = "none";
});

//send email form
/*
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#formid')
    const addButton = document.querySelector('#submitbutton')
    //const updateButton = document.querySelector('#updateAddress')
  
    addButton && addButton.addEventListener('click', (e) => {
      e.preventDefault()
  
      if (!form.checkValidity()) {
        return
      }
  
      fetch('https://22242122.sibforms.com/serve/MUIEAFviVKMOgXKqIKahcIUcPU4E2qrOD5RoywBglC-uPPsZ1pivAjzG8KDv2COk2wTywJIcOMSA582duFkm5WlVF-LXT-CeloWSFr1zbi2uTI2kSd7HEO0QHHeYoD5AaUdCK1z5msZU8QGtV4UvacSmww2AM1sYE94g9IDNjjehiMdizx82c4WuXJAeN3LJH81P4lFZK1Qms5bI', { method: 'POST', body: new FormData(form) })
        .then((r => r.json()))
        .then(console.log)
        console.log("I know there is an error, just ignore it.")
    })
  })*/