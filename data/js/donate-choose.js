const donatebutton = document.getElementById("nav-donate");
const donatechooseoverlay = document.getElementById("donate-choose-overlay");
const donatechoosepopup = document.getElementById("donate-choose-popup");

donatebutton.addEventListener("click", function () {
  donatechooseoverlay.style.display = "block";
  donatechoosepopup.style.display = "block";
  // Show our element
  $("#donate-choose-popup").show();
});

donatechooseoverlay.addEventListener("click", function () {
  donatechooseoverlay.style.display = "none";
  donatechoosepopup.style.display = "none";
});