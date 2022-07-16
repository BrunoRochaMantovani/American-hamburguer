var card_personalizado = document.getElementById('card_personalizado');


function myFunction(x) {
    if (x.matches) { // If media query matches
        card_personalizado.classList.remove('flex-row');
    } else {

    }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x);
x.addListener(myFunction)