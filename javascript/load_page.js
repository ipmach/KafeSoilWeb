/*

File name: load_page.js
Written by: Léa Gaigeot
When: November 2017
Purpose: Function that loads every html page one after the other in the main webpage.

*/


// JavaScript Document

function loadPage(href){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", href, false);
	xmlhttp.send();
	return xmlhttp.responseText;
};

document.getElementById('about').innerHTML = loadPage('html/about.html');
document.getElementById('food_drinks').innerHTML = loadPage('html/food_drinks.html');
document.getElementById('events').innerHTML = loadPage('html/events.html');
document.getElementById('art').innerHTML = loadPage('html/art.html');
document.getElementById('volunteer').innerHTML = loadPage('html/volunteer.html');
document.getElementById('contacts').innerHTML = loadPage('html/contact.html');


/*
Léa Gaigeot, Lauri Koikkalainen, André Garcia Gomez, Aurianne Vienney
November 2017
Web Technologies
*/

