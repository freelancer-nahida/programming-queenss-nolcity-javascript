
document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault()
    // console.log('login button Clicket');

    // get the phone number
    const phoneNumber = document.getElementById('phone-number').value;


    // get the pin number

    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);


    // Do this time only. Never do it in

    if (phoneNumber === '01712692645' && pinNumber === '1234') {
        // console.log('you are login ');
        window.location.href = './bank.html';
    }
    else {
        alert(' invalid id and password');
    }
})


