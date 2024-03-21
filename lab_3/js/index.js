
// Validate Bill Total Input for numbers
let BillTotalInput = document.querySelector('input[name="bill-total"]');

BillTotalInput.addEventListener("input", validateBillTotal);

function validateBillTotal() {
    if (!/^\d*\.?\d*$/.test(BillTotalInput.value)) {
        alert("Please enter numbers only.");
        // Clears the invalid input immediately
        BillTotalInput.value = '';
    }
}

// Get tip from slider and log it into tip percentage field
function viewTipPercentage() {
    const BillTotal = parseFloat(BillTotalInput.value);
    const viewTipPercentage = parseInt(tipSlider.value, 10);

    
}