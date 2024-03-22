
// Get content from form and store in variables
document.addEventListener('DOMContentLoaded', function() {
    const billTotalInput = document.querySelector('input[name="bill-total"]');
    const tipSlider = document.querySelector('input[name="tip-slider"]');
    const tipPercentageDisplay = document.querySelector('input[name="tip-percentage"]');
    const tipAmountDisplay = document.querySelector('input[name="tip-amount"]');
    const totalBillDisplay = document.querySelector('input[name="total-bill-w-tip"]');

    // Takes bill input and make sure it does not contain any letters 
    function validateBillTotal(input) {
        if (/[^0-9.]/.test(input.value)) {
            alert("Please enter numbers only.");
            input.value = input.value.replace(/[^0-9.]/g, '');
        }
    }

    // Calcutates the tip amount and total will with tip and display it accordingly
    function calculate() {
        const billTotal = parseFloat(billTotalInput.value) || 0;
        const tipPercentage = parseInt(tipSlider.value, 10) || 0;

        tipPercentageDisplay.value = tipPercentage + '%';
        const tipAmount = (billTotal * tipPercentage) / 100;
        tipAmountDisplay.value = tipAmount.toFixed(2);

        const totalBill = billTotal + tipAmount;
        totalBillDisplay.value = totalBill.toFixed(2);
    }

    // Validate Bill Total Input for numbers
    billTotalInput.addEventListener("input", function() {
        validateBillTotal(this);
        calculate();
    });
    
    // Get Tip percentage from slider and call calculate function
    tipSlider.addEventListener('input', function(){
        calculate();
    });
});