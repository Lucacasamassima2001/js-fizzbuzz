
// COUNTER

const eleGrid = document.querySelector(".grid");


for (let i = 0; i <= 100; i++){
    console.log(i)
    
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`
}


// REVERSE COUNTER
// let sum = 0
// for (let i = 100; i > 0; i--){
//     sum = sum + i
// }

// REVERSE COUNTER  DIVISION
// let sum = 0
// for (let i = 100; i > 10; i = i / 2){
//     sum = sum + i
// }