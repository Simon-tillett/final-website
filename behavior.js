document.addEventListener("DOMContentLoaded", function () {

  var img = document.getElementById("smart_thumbnail");

  if (img) {
    img.addEventListener("click", function () {
      if (img.className === "small") {
        img.className = "";
      } else {
        img.className = "small";
      }
    });
  }

});