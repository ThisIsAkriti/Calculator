
let calculation= localStorage.getItem('calculation') || '';

finalCalculation();

function calculationUpdate(num){
  calculation += num;

  finalCalculation();

  localStorage.getItem('calculation',calculation)
} 
function finalCalculation(){
  
  document.querySelector('.js-total').innerHTML = calculation;
}
