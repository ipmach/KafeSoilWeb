const food = [
  {
    name:"chocolate cake",
    price:"20 kr"
  },
  {
    name:"carrot cake",
    price:"20 kr"
  },
  {
    name:"cookies",
    price:"5 kr"
  },
  {
    name:"banana",
    price:"600 kr"
  }
];

const drinks = [
  {
    name:"Organic milk",
    price:"30 kr"
  },
  {
    name:"vegan cofe",
    price:"21 kr"
  },
  {
    name:"vegan vodka",
    price:"30 kr"
  }
];















































































































function read_array(nameId, array){
   for (var i=0; i<array.length; i++){
     var list = document.getElementById(nameId);
     var li = document.createElement("li");
     var sum=35-array[i].name.length;
     let space="_";
     for (var j=0; j<sum;j++){
       space=space+"_";
     }
     li.style="text-align: left";
     li.appendChild(document.createTextNode(array[i].name +space + array[i].price));
     list.appendChild(li);
      console.log(array[i].name);
    }
}
read_array("food_list",food);
read_array("drinks_list",drinks)
