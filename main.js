"use strict"

// Hämta in meny-knapparna
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

//eventlyssnare
openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

//Toggla fram navigeringsmenyn
function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");

    //hämtar in css för menyn
    let style = window.getComputedStyle(navMenuEl);

    //koll om navigering är synlig eller ej, ändrar display block/none
    if(style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}

// Logga in
function auth (){
    window.location.assign("bokaresa.html");
    alert("Du är inloggad!")
}
//Ändra resa
function authTwo (){
    window.location.assign("andrabokadresa.html");
}

//Ändra resa två
function authThree () {
    window.location.assign("andrabokadresatva.html");
}

//bokad resa konfirmation
function bokadResa() {
    alert("Tack för din bokning! Du har bokningsnummer 12345678.");
}

//Avboka resa 
function avbokaResa () {
    alert("Din resa är nu avbokad!");
}

//Knappar som visar text
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("buttonactive");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}