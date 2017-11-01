var num = 1;
var x;   //List of all pictures
var y;   //list of all artist

function nextOrAfter(n) {
  changePictures(num += n);
}

function nextOrAfter2(n){
  num=n;
  changePictures(n);
}

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
