/*

File name: food_drinks.js
Written by: Lauri Koikkalainen
When: November 2017
Purpose: Display the options of the phone menu.

*/


/*Use a global variable to display or hidde the phone menu*/

var key_var=0;
function show_var(){
  if (key_var==0){
      document.getElementById('options_menu2').style.display="block";
      key_var=1;
  }else{
      document.getElementById('options_menu2').style.display="none";
      key_var=0;
  }
}

/*
Léa Gaigeot, Lauri Koikkalainen, André Garcia Gomez, Aurianne Vienney
November 2017
Web Technologies
*/
