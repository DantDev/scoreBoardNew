let numOneEl = document.getElementById("num1-el")
let numTwoEl = document.getElementById("num2-el")

let num1 = 0
let num2 = 0

function plusOneHome() {
    num1 += 1
    numOneEl.innerText = num1
}

function plusTwoHome() {
    num1 += 2
    numOneEl.innerText = num1
}

function plusThreeHome() {
    num1 += 3
    numOneEl.innerText = num1
}


function plusOneGuest() {
    num2 += 1
    numTwoEl.innerText = num2
}

function plusTwoGuest() {
    num2 += 2
    numTwoEl.innerText = num2
}

function plusThreeGuest() {
    num2 += 3
    numTwoEl.innerText = num2
}

function zero() {
    numOneEl.innerText = 0
    numTwoEl.innerText = 0
}