var inputs = document.getElementsByClassName('main-input');
var button = document.getElementById('aссept-checkout');
var emailInput = document.getElementById('email');
var phoneNumberInput = document.getElementById('phone-number');

button.disabled = true;

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

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


var phoneNumberInput = document.getElementById('phone-number');

document.getElementById('phone-number').value = '+375';
function inputHandler(e) {
    let input = e.target;
    if (!input.value.startsWith('+375')) {
        input.value = '+375';
    }
} 