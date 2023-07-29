import './style.css';

// Input DOM elements
const billCost = document.querySelector('.bill-cost');
const people = document.querySelector('.total-peeps')

//Buttons DOM elements
const tipBtn1 = document.querySelector('.btn-tip1');
const tipBtn2 = document.querySelector('.btn-tip2');
const tipBtn3 = document.querySelector('.btn-tip3');
const tipBtn4 = document.querySelector('.btn-tip4');
const tipBtn5 = document.querySelector('.btn-tip5');
const tipBtn6 = document.querySelector('.btn-tip6');

//Error DOM elements
const error1 = document.querySelector('.error-1');
const error2 = document.querySelector('.error-text');

//Display bill costs
const cost1 = document.querySelector('.tip-value');
const cost2 = document.querySelector('.cost-text');

const calculateTip = (num, val = 1) => {
  if (!billCost.value) {
    error1.innerHTML = 'Please enter a valid bill cost';
    billCost.style.outline = '1px solid red'
    return;
  }
  const numberOfPeople = val;
  if (numberOfPeople <= 0) {
    error2.innerHTML = 'Please enter a valid number of people';
    return;
  }
  let result = ((num / 100) * billCost.value);
  result = result / numberOfPeople;
  result = result.toFixed(2);

  cost1.innerHTML = result;
}

//Display tip amount
tipBtn1.addEventListener('click', () => {
  calculateTip(5, people.value);
})
tipBtn2
tipBtn3
tipBtn4
tipBtn5
