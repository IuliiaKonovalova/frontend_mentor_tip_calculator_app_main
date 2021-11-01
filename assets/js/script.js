// variables for inputs
const billInput = document.querySelector('#bill__number');
const tipButtons = document.querySelectorAll('.btn_tip');

const customInput = document.querySelector('#tip__number_custom');
const peopleInput = document.querySelector('#people_number');
// variables for outputs
const finalTipToPay = document.querySelector('#tip__amount');
const finalAmountToPay = document.querySelector('#total__amount');
// Variable for the reset button
const resetButton = document.querySelector('#btn__reset');
const warning = document.querySelector('#warning');
// Temporarily variables
let billAmountVariable = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
/**
 * Main function
 * Listens to the inputs of the user
 */
document.addEventListener('DOMContentLoaded', function () {
  customInput.addEventListener('input', getCustomTipValue, 500);
  billInput.addEventListener('input', getBillValue, 500);
  peopleInput.addEventListener('input', getPeopleValue, 500);
  customInput.addEventListener('input', () => {
    tipButtons.forEach((item, i) => {
      item.checked = false;
    })
  })
  tipButtons.forEach((item, i) => {
    item.addEventListener('click', () => {
      tipPercentage = Number(item.value);
      customInput.value = '';
      totalAmountPersonCalculate();
    })
  });

});

/**
 * Checks whether the user typed all inputs
 * Makes the calculations
 * Presents the data in the output
 *  
 */
let totalAmountPersonCalculate = () => {
  if (billAmountVariable !== 0 && tipPercentage !== 0 && numberOfPeople === 0) {
    console.log('error');
    warning.classList.remove('alert__info--hidden');
    document.querySelector('.input--hidden').style.border = '3px solid #dc8f78';
  } else if (billAmountVariable !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
    console.log('no error');
    warning.classList.add('alert__info--hidden');
    document.querySelector('.input--hidden').style.border = '3px solid #a0e7df';
    let total = ((billAmountVariable * tipPercentage) /
      numberOfPeople
    );
    let totalTip = total - (billAmountVariable / numberOfPeople);

    finalTipToPay.innerHTML = `$${totalTip.toFixed(2)}`;
    finalAmountToPay.innerHTML = `$${total.toFixed(2)}`;

    resetButton.addEventListener('click', resetAll);
    resetButton.style.backgroundColor = '#26c0ab';
  }
}


/**
 * Gets the value from th input bill
 */
let getBillValue = () => {
  billAmountVariable = Number(billInput.value);
  totalAmountPersonCalculate();
}

/**
 * Gets the value from th input custom tip
 */
let getCustomTipValue = () => {
  tipPercentage = Number(customInput.value) / 100;
  totalAmountPersonCalculate();
}

/**
 * Gets the value from th input people
 */
let getPeopleValue = () => {
  numberOfPeople = Number(peopleInput.value);
  if (numberOfPeople === 0) {
    showPeopleInputError(0);
  }
  totalAmountPersonCalculate();
}

/**
 * Displays a mistake message if the input in "number of people" is 0,
 * Delete mistake if the input more than 0
 */
function showPeopleInputError(errorIndex) {
  if (errorIndex === 0) {
    warning.classList.remove('alert__info--hidden');
    document.querySelector('.input--hidden').style.border = '3px solid #dc8f78';
  } else {
    warning.classList.add('alert__info--hidden');
    document.querySelector('.input--hidden').style.border = '3px solid #a0e7df';
  }
}