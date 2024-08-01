//Create items list 
const popupButton = document.getElementById('Add-item-btn');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');
const closeIcon = document.getElementById('close-popup');

//Reveals the add items form 
function showPopUp(){
  overlay.style.display = 'block';
  popup.style.display = 'block';
}

function closePopUp(){
  overlay.style.display = 'none';
  popup.style.display = 'none';
}











popupButton.addEventListener('click', showPopUp);
closePopupButton.addEventListener('click', closePopUp);
closeIcon.addEventListener('click', closePopUp);



//increment & decrement counter
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const displayedValue = document.getElementById('number');

let value =0;

function addValue(event){
  event.preventDefault;
  value++;
  displayedValue.innerHTML = value;
}

function subtractValue(event){
  event.preventDefault;
  value--;
  displayedValue.innerHTML = value;
}

increment.addEventListener('click', addValue);
decrement.addEventListener('click', subtractValue);