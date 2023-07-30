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

const calculateTip = (num, val) => {
  if (!billCost.value) {
    error1.innerHTML = 'Please enter a valid bill cost';
    billCost.style.outline = '1px solid red'
    return;
  } 
  const numberOfPeople = val;
  if (numberOfPeople <= 0) {
    error2.innerHTML = 'Valid number of people';
    return;
  } else {

    let result = (num / 100) * billCost.value;
    result = result / numberOfPeople;
    result = result.toFixed(2);
    
    cost1.innerHTML = result;
  }
}

const calcutaleTotalCost = (num) => {
  if (!billCost.value || people.value <= 0) {
    return;
  } else {

    let result1 = billCost.value / people.value;
    let result2 = (result1 * (num / 100)) + result1;
    result2 = result2.toFixed(2);
    
    cost2.innerHTML = result2;
  }
};

//Display tip amount
tipBtn1.addEventListener('click', () => {
  calculateTip(5, people.value);
  calcutaleTotalCost(5);
});

tipBtn2.addEventListener('click', () => {
  calculateTip(10, people.value);
  calcutaleTotalCost(10);
});

tipBtn3.addEventListener('click', () => {
  calculateTip(15, people.value);
  calcutaleTotalCost(15);
});

tipBtn4.addEventListener('click', () => {
  calculateTip(25, people.value);
  calcutaleTotalCost(25);
});

tipBtn5.addEventListener('click', () => {
  calculateTip(50, people.value);
  calcutaleTotalCost(50);
});
tipBtn6.addEventListener('change', () => {
  calculateTip(tipBtn6.value, people.value);
  calcutaleTotalCost(tipBtn6.value);
});

