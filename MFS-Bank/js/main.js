
// console.log('hvjkjkhlkk hjhkjk');


//console.log('add  money hidden');


document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // const addMoneyFunc = getInputFieldById();

    // console.log(addMoneyFunc);

    // console.log('clicked');

    // const addMoney = document.getElementById('add-money').value

    // const addMoneyNumber = parseFloat(addMoney);
    // // console.log(addMoney);
    const addMoney = getInputFieldById('add-money');

    const pinNumber = getInputFieldById('pin-number');
    // console.log(pinNumber);
    if (pinNumber === 1234) {
        const balance = getTextFieldById('account-balance')
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else {

        alert('Failed to Add')
    }

});