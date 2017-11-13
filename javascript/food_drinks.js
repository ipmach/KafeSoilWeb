function read_array(nameId, array){
   for (var i=0; i<array.length; i++){
<<<<<<< HEAD
     var table = document.getElementById(nameId);
     var tr = document.createElement("tr");
	   var itemName = document.createElement("td");
	   var itemPrice = document.createElement("td");
=======
	 var table = document.getElementById(nameId);
     var tr = document.createElement("tr");
	 var itemName = document.createElement("td");
	 var itemPrice = document.createElement("td");
>>>>>>> 01c22f86c86cb0bebd2f0450439fc145c885474e
     //let itemAllergen = document.createElement("td");
	 itemName.appendChild(document.createTextNode(array[i].name));
     itemPrice.appendChild(document.createTextNode(array[i].price));
	 //itemAllergen.appendChild(document.createTextNode(array[i].allergen));
	 tr.appendChild(itemName);
	 tr.appendChild(itemPrice);
	 //tr.appendChild(itemAllergen);
	 table.appendChild(tr);
    }
}
read_array("food_list",food);
read_array("drinks_list",drinks)
