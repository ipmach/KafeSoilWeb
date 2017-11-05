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
