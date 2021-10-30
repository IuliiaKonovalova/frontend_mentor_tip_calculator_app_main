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

const warningMessage = document.querySelector('#warning')

const integer = /\d{1,}/;
billNumber.addEventListener('input', countBill);
tipNumberCustom.addEventListener('input', countTipCustom);
peopleNumber.addEventListener('input', countPeople);
btnReset.addEventListener('click', resetAll);

let selectedTip = 0;

btnsTipNumber.forEach((btnTipNumber) =>
  btnTipNumber.addEventListener('click', (e) => {
    e.preventDefault();
    selectedTip = Number.parseInt(e.target.dataset.tip);
    // console.log(e.target.dataset.tip + " event target");
    // console.log(selectedTip + " selected TIP");
  })
)

function countBill() {
  if (!integer.test(billNumber.value) && billNumber.value !== '0') {
    console.log('hi')
  } else if (billNumber.value === '0') {
    console.log('not 0')
  }
  return (billNumber)
}

function countPeople() {
  if (!integer.test(peopleNumber.value) && peopleNumber.value !== '0') {
    console.log('hi')
  } else if (peopleNumber.value === '0') {
    warningMessage.classList.remove('alert__info--hidden')
    document.querySelector('.input--hidden').style.border = '3px solid #dc8f78'
  } else {
    warningMessage.classList.add('alert__info--hidden')
    document.querySelector('.input--hidden').style.border = '3px solid #a0e7df'
  }
}

function countTipCustom() {
  if (tipNumberCustom.value > '100') {

  }
}

function resetAll() {
  billNumber.value = '';
  tipNumberCustom = '';
  peopleNumber = '';
  selectedTip = 0;
}