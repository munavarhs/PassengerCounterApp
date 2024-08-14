// document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el")
let previousEntries = document.getElementById("message")


let count = 0;

function increment(){
    count++
    countEl.textContent = count
}

function save(){
    previousEntries.textContent += " "+count +" - ";
    countEl.innerText = 0;
}