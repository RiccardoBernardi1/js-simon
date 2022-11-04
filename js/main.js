"use strict"
// 1. Creare un ciclo che generi 5 numeri casuali da 1 a 100 e li aggiunga ad un array 
// 2. Stampare l'array a schermo
// 3. Creare una timing function che si attivi dopo 30 secondi con questi compiti:
//    - Far scomparire i numeri dallo schermo
//    - Generare con un ciclo for 5 prompt che richiedono un numero all'utente
//    - Se il numero è presente nell'array lo aggiungo ad un ulteriore array
//    - Comunicare all'utente quanti e quali numeri sono nel secondo array

// MAIN
let numbers=[];
let guessed=[];
const screenNumbers=document.getElementById("numbers");
const time=document.getElementById("time");
const title=document.querySelector("h1");
const endGame=document.getElementById("endGame-up");
const endGameDown= document.getElementById("endGame-down");
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
},30000);
setTimeout(function(){
    for (let i = 0; i < numbers.length; i++) {
        let userNumber=Number(prompt("Inserisci un numero"));
        if(numbers.includes(userNumber)){
            guessed.push(userNumber);
        }
        console.log(guessed);
    }
    if(guessed.length>0){
        endGame.innerHTML=(`Congratulazioni hai indovinato ${guessed.length} su 5 numeri.`);
        endGameDown.innerHTML= `Numeri individuati:"${guessed}"`
    }else{
        endGame.innerHTML=(`Hai indovinato 0 numeri`);
    }
},31000);
