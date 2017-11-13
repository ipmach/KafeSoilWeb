/*

File name: food_drinks.js
Written by: Lauri Koikkalainen
When: November 2017
Purpose: Fill the Food table and the Drinks table of the html page. 

*/


/*For each item in the food list in the JSON file food_drinks.json,
it creates a new line with two columns, one for the name of the food or drink,
and one for the price. The commented lines are there in case we would want to 
signal for allergen food features.*/

function read_array(nameId, array){
   for (var i=0; i<array.length; i++){
     var table = document.getElementById(nameId);
     var tr = document.createElement("tr");
	 var itemName = document.createElement("td");
	 var itemPrice = document.createElement("td");
	 var table = document.getElementById(nameId);
     var tr = document.createElement("tr");
	 var itemName = document.createElement("td");
	 var itemPrice = document.createElement("td");
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

/*
Léa Gaigeot, Lauri Koikkalainen, André Garcia Gomez, Aurianne Vienney
November 2017
Web Technologies
*/
