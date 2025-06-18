// stem-1 || add an event  handler to the add money button

document.getElementById('btn-add-money').addEventListener('click', function () {


    //prevent page reload form submit
    event.preventDefault();
    // console.log('clock');

    // step-2|| get money to be added to the account

    const addMoneyInputString = document.getElementById('add-money-input').value
    // console.log(addMoneyInput);

    // get the pin provider

    const pinNumberInput = document.getElementById('pin-number-input').value

    // console.log(pinNumberInput);


    // step-3 || verify the pin

    // wrong way
    if (pinNumberInput === '1234') {
        // console.log(' money added');

        //Get the Current balance
        const currentBalanceString = document.getElementById('account-balance').innerText;

        const currentBalance = parseFloat(currentBalanceString);

        const addMoneyInput = parseFloat(addMoneyInputString);

        console.log(typeof currentBalance);


        //add addmoneyinpiut with balance

        const newBalance = currentBalance + addMoneyInput;
        // console.log(newBalance);

        // step-6 update the balance in the UI/dom

        document.getElementById('account-balance').innerText = newBalance
    }
    else {
        alert('Failed to add money');
    }

});
