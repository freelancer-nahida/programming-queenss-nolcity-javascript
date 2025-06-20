document.getElementById('btn-cashOut').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldById('cash-out');
    const pinNum = getInputFieldById('pin');

    if (pinNum === 1234) {
        const balance = getTextFieldById('account-balance');
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Faild to CashOut');
    }

});