function read_array(nameId, array){
   for (var i=0; i<array.length; i++){
     let table = document.getElementById(nameId);
     let tr = document.createElement("tr");
	 let itemName = document.createElement("td");
	 let itemPrice = document.createElement("td");
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
