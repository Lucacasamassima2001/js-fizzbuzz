
// COUNTER

const elcell = document.querySelector(".container")
console.log(elcell)
const maxsquares = 96


for(let i = 1; i <= maxsquares; i++){
    
    if(i % 15 == 0){
        console.log("cell15")
        elcell.innerHTML = elcell.innerHTML + `<div class="cell cell15">FizzBuzz</div>`;
    }
    else if(i % 5 == 0){
        console.log("cell5")
        elcell.innerHTML = elcell.innerHTML + `<div class="cell cell5">Buzz</div>`;
    }

    else if(i % 3 == 0){
        console.log("cell3")
        elcell.innerHTML = elcell.innerHTML + `<div class="cell cell3">Fizz</div>`;
    }

    
    else{
        console.log(i)
        elcell.innerHTML = elcell.innerHTML + `<div class="cell">${i}</div>`;
    }
    
    
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