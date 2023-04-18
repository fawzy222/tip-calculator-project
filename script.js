const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.percentages button');
const customTipInput = document.querySelector('.custom-tip input');
const peopleInput = document.getElementById('people');
const tipAmountOutput = document.getElementById('tip-amount');
const totalAmountOutput = document.getElementById('total-amount');
const resetButton = document.getElementById("reset");


let billAmount = 0;
let tipPercentage = 0;
let customTipPercentage = 0;
let numberOfPeople = 1;

billInput.addEventListener('input', () => {
  billAmount = Number(billInput.value);
  calculateTipAndTotal();
});

tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    tipPercentage = Number(button.textContent.replace('%', ''));
    customTipPercentage = 0;
    calculateTipAndTotal();
  });
});

customTipInput.addEventListener('input', () => {
  customTipPercentage = Number(customTipInput.value);
  tipPercentage = 0;
  calculateTipAndTotal();
});

peopleInput.addEventListener('input', () => {
  numberOfPeople = Number(peopleInput.value) || 1;
  calculateTipAndTotal();
});

resetButton.addEventListener('click', () => {
  billAmount = 0;
  tipPercentage = 0;
  customTipPercentage = 0;
  numberOfPeople = 1;
  billInput.value = '';
  customTipInput.value = '';
  peopleInput.value = '';
  tipAmountOutput.textContent = '$0.00';
  totalAmountOutput.textContent = '$0.00';
});

function calculateTipAndTotal() {
  const tipAmount = (billAmount * (tipPercentage + customTipPercentage) / 100) / numberOfPeople;
  const totalAmount = (billAmount + (billAmount * (tipPercentage + customTipPercentage) / 100)) / numberOfPeople;

  tipAmountOutput.textContent = '$' + tipAmount.toFixed(2);
  totalAmountOutput.textContent = '$' + totalAmount.toFixed(2);
}
