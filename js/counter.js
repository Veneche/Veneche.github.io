var num = document.getElementById("num");
var inc = document.getElementById("increase");
var dec = document.getElementById("decrease");
var reset = document.getElementById("reset");

dec.addEventListener("click", decreaseCount);

function decreaseCount() {
    numValue = parseInt(num.innerText);
    num.innerText = (numValue - 1 );

    if (num.innerText < 0) {
        num.style.color = "#fa7a83";
    } else if (num.innerText == 0) {
        num.style.color = "black";
    }
}

inc.addEventListener("click", increaseCount);

function increaseCount() {
    numValue = parseInt(num.innerText);
    num.innerText = (numValue + 1 );

    if (num.innerText > 0) {
        num.style.color = "#caf7b0";
    } else if (num.innerText == 0) {
        num.style.color = "black";
    }
}

reset.addEventListener("click", resetCount);

function resetCount() {
    num.innerText = 0;
    num.style.color = "black";
}

