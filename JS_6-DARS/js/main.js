/*function onClickButon() {
  alert("Вы нажали на меня")
 
} */

// Knopka bosilganda consol da necha marta bosilgani ko'rinadi
/*  var counter = 0;
 function onClickButon() {
  counter++;
  console.log(counter);
 }  */


// endi knopka necha marta bosilgani brouzerda ko'rinib turadi
 /*var counter = 0;
 function onClickButon(el) {
  counter++;
  el.innerHTML = "Вы нажали на меня" + counter;
  console.log(el.name); // consol da ko'rinadi
 }*/
  var counter = 0;
  function onClickButon(el) {
    counter++;
    el.innerHTML = "Вы нажали " + counter + " раз(а)."; // Bu yerda nima bo'lishi kerak?
    el.style.background = "Red";
    el.style.color = "blue";
    el.style.cssText = "border-radius:5px; border:0; font-size:20pageXOffset";
    console.log(el.onclick);  
 }
 function onInput(el){
  if(el.value == 'Hello')
    alert('И тебе привет')
  console.log(el.value);
 }

