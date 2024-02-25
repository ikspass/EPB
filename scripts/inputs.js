var inputs = document.getElementsByClassName('main-input');
var button = document.getElementById('aссept-checkout');
var emailInput = document.getElementById('email');
var phoneNumberInput = document.getElementById('phone-number');

button.disabled = true;

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        var allFilled = true;
        for (var j = 0; j < inputs.length; j++) {
            if (!inputs[j].value) {
                allFilled = false;
                break;
            }
        }
        if (emailInput.value.length <= 15 || phoneNumberInput.value.length != 13) {
            allFilled = false;
        }
        button.disabled = !allFilled;
    });
}


document.getElementById('phone-number').value = '+375';
function inputHandler(e) {
    let input = e.target;
    if (!input.value.startsWith('+375')) {
        input.value = '+375';
    }
}