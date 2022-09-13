// function switchClass(){
//     header.classList.add("normalBlue");
// }
// header.addEventListener('scroll',switchClass);
const header = document.getElementById("navBar");

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $("header").addClass("normalBlue");
      } else {
        $("header").removeClass("normalBlue");
      }
    });
  });

function movetocontent(locate){
  window.location.replace(locate);
}