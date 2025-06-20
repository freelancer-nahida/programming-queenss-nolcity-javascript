// console.log('utilies loaded');

// common function here

// function getInputFieldById() {
//     // console.log('button clicked');

//     const addMoney = document.getElementById('add-money').value

//     // console.log(addMoney);
//     return addMoney;



// };

function getInputFieldById(Id) {
    const inputValue = document.getElementById(Id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextFieldById(Id){
    const textValue = document.getElementById(Id).innerText;

    const textNumber = parseFloat(textValue);
    return  textNumber;
}