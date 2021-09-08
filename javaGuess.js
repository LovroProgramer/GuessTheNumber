'use strict'


const answer = Math.trunc(Math.random()*999+1);
console.log("Correct number is",answer);
document.querySelector('.check').addEventListener('click', function(){
    let number = Number(document.querySelector('.guess').value);
    console.log(number);
    if(number === answer){
        document.querySelector(".box").style.borderColor = '#39FF14';
        document.body.style.background = 'url(matrix3.gif)';
        document.querySelector('.pedit p').style.visibility = 'visible';
        document.querySelector('.check').style.visibility = 'hidden';
    }
});

