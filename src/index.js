const ul = document.getElementById("list-group")
const inputBox = document.getElementById('input-box');
const saveButton = document.getElementById("save-btn")
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
//closes the add items form
function closePopUp(){
  overlay.style.display = 'none';
  popup.style.display = 'none';
}

popupButton.addEventListener('click', showPopUp);
closePopupButton.addEventListener('click', closePopUp);
closeIcon.addEventListener('click', closePopUp);

//Add items
function addItems(){
  if(inputBox ===""){
    alert("please add your item");
  }else{
    let li =document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = inputBox.value
    ul.appendChild(li);

    let div = document.createElement("div");
    div.classList.add("counter");
    li.appendChild(div);

    let i = document.createElement("i");
    i.innerHTML += '<i class="fa-solid fa-square-minus fa-lg"></i>';
    i.id ='decrement';
    div.appendChild(i);

    let p = document.createElement("p");
    p.id="number";
    p.innerText=0
    div.appendChild(p);

    let ii = document.createElement("i");
      ii.innerHTML += '<i class="fa-solid fa-square-plus fa-lg" id="increment"></i>';
      ii.id ='incrementt';
    div.appendChild(ii);
  }
}


saveButton.addEventListener("click", addItems)


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