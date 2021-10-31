//variables

const billNumber = document.querySelector('#bill__number');
const tipNumberCustom = document.querySelector('#tip__number_custom');
const btnsTipNumber = document.querySelectorAll('.btn_tip')
const tipNumber5 = document.querySelector('#tip__number_5');
const tipNumber10 = document.querySelector('#tip__number_10');
const tipNumber15 = document.querySelector('#tip__number_15');
const tipNumber25 = document.querySelector('#tip__number_25');
const tipNumber50 = document.querySelector('#tip__number_50');
const peopleNumber = document.querySelector('#people_number');
const btnReset = document.querySelector('#btn__reset');

const personAmount = document.querySelector('#person__amount');
const totalAmount = document.querySelector('#total__amount')

const warningMessage = document.querySelector('#warning')


document.addEventListener('DOMContentLoaded', function () {
  // Reset all inputs
  resetAll();
  // Event listeners for all buttons
  billNumber.addEventListener('input', countBill);
  tipNumberCustom.addEventListener('input', countTipCustom);
  peopleNumber.addEventListener('input', countPeople);
  btnReset.addEventListener('click', resetAll);

});

const integer = /\d{1,}/;


let selectedTip = '';

btnsTipNumber.forEach((btnTipNumber) =>
  btnTipNumber.addEventListener('click', (e) => {
    e.preventDefault();
    selectedTip = Number.parseInt(e.target.dataset.tip);
    // console.log(e.target.dataset.tip + " event target");
    // console.log(selectedTip + " selected TIP");
    console.log(selectedTip)
    return selectedTip
  })
)

const countTipCustom = function () {
  // if (tipNumberCustom.value > '100') {

  // }
  selectedTip = tipNumberCustom.value;
  console.log(selectedTip)
  return selectedTip
}


const countBill = function () {
  if (!integer.test(billNumber.value) && billNumber.value !== '0') {
    console.log('hi')
  } else if (billNumber.value === '0') {
    console.log('not 0')
  }
  console.log(billNumber.value)
  return (billNumber.value)
}

/**
 * Check whether people's number is legible
 */
const countPeople = function () {
  if (peopleNumber.value === '0') {
    warningMessage.classList.remove('alert__info--hidden')
    document.querySelector('.input--hidden').style.border = '3px solid #dc8f78'
  } else {
    warningMessage.classList.add('alert__info--hidden')
    document.querySelector('.input--hidden').style.border = '3px solid #a0e7df'
    console.log(peopleNumber.value)
    return (peopleNumber.value)
  }
}



function calculation() {
  if (billNumber.value !== '' && selectedTip !== '' && peopleNumber.value === '') {
    console.log('no people')
    warningMessage.classList.remove('alert__info--hidden')
    document.querySelector('.input--hidden').style.border = '3px solid #dc8f78'
  } else if (billNumber.value !== '' && selectedTip !== '' && peopleNumber.value !== '') {
    warningMessage.classList.add('alert__info--hidden')
    document.querySelector('.input--hidden').style.border = '3px solid #a0e7df'
    // result1 = ((billNumber.value * (tip / 100)) / peopleNumber.value).toFixed(2);
    console.log(billNumber.value)
    console.log(result1)
    // personAmount.innerHTML = `${result1}`
  }
  console.log('no people')
}


// function

function resetAll() {
  billNumber.value = '';
  tipNumberCustom.value = '';
  peopleNumber.value = '';
  selectedTip = 0;
}