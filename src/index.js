const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const displayedValue = document.getElementById('number');

let value =0;
function addValue(event){
  event.preventDefault;
  value++;
  displayedValue.innerHTML = value;
}

increment.addEventListener('click', addValue);