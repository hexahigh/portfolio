var donatebutton = document.getElementById("nav-donate");
var donatechooseoverlay = document.getElementById("donate-choose-overlay");
var donatechoosepopup = document.getElementById("donate-choose-popup");

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