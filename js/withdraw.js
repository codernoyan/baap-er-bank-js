/**
 * add event handler with the withdraw button
 * get the input amount from the input field
 * also make sure to convert the input into a number by using parseFloat
 * get previous withdraw total
 * calculate total withdraw amount
 * set total withdraw amount
 * get the total balance total
 * calculate new balance total
 * set the new balance total
 * clear the input field
 */

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-8: clear the input field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-8: clear the input field
    withdrawField.value = '';

    // validation
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Tomar Baap er bank e eto taka nai');
        return;
    }

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // step-5
    WithdrawTotalElement.innerText = currentWithdrawTotal;

    // step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})