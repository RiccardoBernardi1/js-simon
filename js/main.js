"use strict"
// 1. Creare un ciclo che generi 5 numeri casuali da 1 a 100 e li aggiunga ad un array 
// 2. Stampare l'array a schermo
// 3. Creare una timing function che si attivi dopo 30 secondi con questi compiti:
//    - Far scomparire i numeri dallo schermo
//    - Generare con un ciclo for 5 prompt che richiedono un numero all'utente
//    - Se il numero è presente nell'array lo aggiungo ad un ulteriore array
//    - Comunicare all'utente quanti e quali numeri sono nel secondo array

// FUNCTIONS

function checkNumbers(userNumber,array1,array2){
    if(array1.includes(userNumber)&& !(array2.includes(userNumber))){
        array2.push(userNumber);
    }
}
function inputValidation(input,min,max){
    if (isNaN(input)||input<min||input>max){
        return false;
    }
    return true;
}

// MAIN

let numbers=[];
let guessed=[];
const screenNumbers=document.getElementById("numbers");
const time=document.getElementById("time");
const title=document.querySelector("h1");
const endGame=document.getElementById("endGame-up");
const endGameDown= document.getElementById("endGame-down");
const container= document.getElementById("container");
const btn= document.getElementById("btn");
const playAgain= document.getElementById("play-again");
document.getElementById("user-input").reset();
while(numbers.length<5){
    let numRandom = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
    if(!(numbers.includes(numRandom))){
        numbers.push(numRandom);
    }
} 
console.log(numbers);
screenNumbers.innerHTML=numbers;
let count=29;
const timer=setInterval(function(){
            time.innerHTML=`Tempo rimanente: ${count} secondi`;
            count--
            },1000);
setTimeout(function() {
    screenNumbers.classList.add("d-none");
    title.classList.add("d-none");
    clearInterval(timer);
    time.innerHTML="";
    container.classList.remove("d-none");
},30000);
btn.addEventListener("click",function(){
    let firstUserNumber=Number(document.getElementById("first-user-number").value);
    let secondUserNumber=Number(document.getElementById("second-user-number").value);
    let thirdUserNumber=Number(document.getElementById("third-user-number").value);
    let fourthUserNumber=Number(document.getElementById("fourth-user-number").value);
    let fifthUserNumber=Number(document.getElementById("fifth-user-number").value);
    checkNumbers(firstUserNumber,numbers,guessed);
    checkNumbers(secondUserNumber,numbers,guessed);
    checkNumbers(thirdUserNumber,numbers,guessed);
    checkNumbers(fourthUserNumber,numbers,guessed);
    checkNumbers(fifthUserNumber,numbers,guessed);
    if(inputValidation(firstUserNumber,1,100)===false){
        alert("Devi inserire un numero valido!");
        return
    }else if(inputValidation(secondUserNumber,1,100)===false){
        alert("Devi inserire un numero valido!");
        return
    }else if(inputValidation(thirdUserNumber,1,100)===false){
        alert("Devi inserire un numero valido!");
        return
    }else if(inputValidation(fourthUserNumber,1,100)===false){
        alert("Devi inserire un numero valido!");
        return
    }else if(inputValidation(fifthUserNumber,1,100)===false){
        alert("Devi inserire un numero valido!");
        return
    }
    container.classList.add("d-none");
    if(guessed.length>0){
        endGame.innerHTML=(`Congratulazioni hai indovinato ${guessed.length} su 5 numeri.`);
        endGameDown.innerHTML= `Numeri individuati:"${guessed}"`
    }else{
        endGame.innerHTML=(`Hai indovinato 0 numeri`);
    }
    playAgain.classList.remove("d-none");
});
playAgain.addEventListener("click",function(){
    window.location.reload();
})