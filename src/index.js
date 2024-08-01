const ul = document.getElementById("list-group")
const inputBox = document.getElementById('input-box');
const saveButton = document.getElementById("save-btn")
//Create items list 
const popupButton = document.getElementById('Add-item-btn');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');
const closeIcon = document.getElementById('close-popup');

let number =0;

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
  if(inputBox===""){
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
    i.addEventListener("click",subtractValue)
    
    
    let p = document.createElement("p");
    p.id="number";
    p.innerHTML= number
    div.appendChild(p);

    let ii = document.createElement("i");
    ii.innerHTML += '<i class="fa-solid fa-square-plus fa-lg" id="increment"></i>';
    ii.id ='increment';
    div.appendChild(ii);
    ii.addEventListener("click",addValue)

    let iDelete = document.createElement("i");
    iDelete.innerHTML +='<i class="fa-solid fa-xmark" ></i>';
    iDelete.id = 'delete';
    div.appendChild(iDelete);
    iDelete.addEventListener('click', function(e){
       li.remove()
    })
    
    //increment & decrement functions
    function updateDisplay(){
      p.innerHTML = number
    }
    
    function addValue(event){
      event.preventDefault;
      number++;
      updateDisplay()
    }
    
    function subtractValue(event){
      event.preventDefault;
      number--;
      updateDisplay()
    }
  }
  inputBox.value=''
}


saveButton.addEventListener("click", addItems)




