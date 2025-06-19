document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOutString = document.getElementById('cash-out-input').value;

        const cashOut = parseFloat(cashOutString);

        // console.log(cashOut);

        const pinNumberInput = document.getElementById('pin-number').value;

        // console.log(pinNumberInput);


        if (pinNumberInput === '1234') {
            const currentBalanceString = document.getElementById('account-balance').innerText
            const currentBalance = parseFloat(currentBalanceString);
            // console.log(currentBalance);

            const newBalance = currentBalance - cashOut;

            document.getElementById('account-balance').innerText = newBalance;

        }
        else {
            alert('enter valid pin');
        }
    })