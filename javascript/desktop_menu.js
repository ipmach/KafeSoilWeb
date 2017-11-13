//display the second menu if the scroll is in x position
document.addEventListener("scroll", function(){
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop < 600) {  //position of the scroll to change the menu
     document.getElementById("Menu2").style.display = "none";
  }else {
     document.getElementById("Menu2").style.display = "block";
  }
});
var about_position=0;
function set_about_position(){
  about_position=document.documentElement.scrollTop || document.body.scrollTop;
};
