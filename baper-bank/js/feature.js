// show the cash out form 
document.getElementById('btn-show-co').addEventListener('click', function (event) {
    console.log('clicked');

    //show cash out btn
    document.getElementById('cashOut-from').classList.remove('hidden')

    // hide the add money btn

    document.getElementById('addMoney-form').classList.add('hidden');


});

document.getElementById('btn-show-add').addEventListener('click', function (event) {
    // console.log(' clicked');

    //show add money btn
    document.getElementById('addMoney-form').classList.remove('hidden');
    //hide cash out btn
    document.getElementById('cashOut-from').classList.add('hidden');
});