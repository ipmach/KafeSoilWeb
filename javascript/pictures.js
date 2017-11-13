/*

File name: pictures.js
Written by: Lauri Koikkalainen
When: November 2017
Purpose: Displays the pictures and the name of the artists when you click on the picture or an the arrows.

*/

var num = 1;
var x;   //List of all pictures
var y;   //list of all artists

//changes to the next picture
function nextOrAfter(n) {
  changePictures(num += n);
}

//changes to the previous picture
function nextOrAfter2(n){
  num=n;
  changePictures(n);
}

//function that displays only one item in the whole pictures and pictures_artists classes and hides the others.
function changePictures(n) {
  x = document.getElementsByClassName("pictures");
  y = document.getElementsByClassName("pictures_artist");
  var i;
  if (n > x.length) {num = 1}
  if (n < 1) {num = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
     y[i].style.display = "none";
   }
  x[num-1].style.display = "block";
  y[num-1].style.display = "block";
}


/*
Léa Gaigeot, Lauri Koikkalainen, André Garcia Gomez, Aurianne Vienney
November 2017
Web Technologies
*/
