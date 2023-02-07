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
        fetch('https://public.herotofu.com/v1/fed039b0-89d2-11ed-a003-6f0b76086b1c', { method: 'POST', body: new FormData(form) })
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