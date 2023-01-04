/* I wrote these in parallel to the video, and found out that instructor was not logging anything. I got the final codes from git repository, and was surprised to know that without logging codes, they are working fine on the app. 


let saveEl = document.getElementById("save-el")
console.log(saveEl);

let countEl = document.getElementById("count-el")
console.log(countEl);

let count = 0;
function increment(){
    count +=  1; // Means count = count + 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " -  "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

console.log(count); */



let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}