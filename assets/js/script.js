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


// billNumber.addEventListener('input', countBill);
// tipNumberCustom.addEventListener('input', countTipCustom);
// peopleNumber.addEventListener('input', countPeople);
// btnReset.addEventListener('click', resetAll);

let selectedTip = 0;

btnsTipNumber.forEach((btnTipNumber) =>
  btnTipNumber.addEventListener('click', (e) => {
    e.preventDefault();
    selectedTip = Number.parseInt(e.target.dataset.tip);
    // console.log(e.target.dataset.tip + " event target");
    // console.log(selectedTip + " selected TIP");
  })
)