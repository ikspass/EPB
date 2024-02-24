var inputs = document.getElementsByClassName('main-input');
var button = document.getElementById('aссept-checkout');

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