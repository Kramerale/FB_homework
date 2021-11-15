'use strict';

//Задача 1

function buttonClick(){
    let elem = document.getElementById('elem');
    elem.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}

//Задача 2

function buttonClick(){
    let elem = document.getElementById('elem');
    elem.outerHTML = '<h3>'+'Абзац превратился в h3!'+'</h3>';
}

//Задача 3

function buttonClick(){
    let elem = document.getElementById('elem');
    elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
}

//Задача 4

function submit1(){
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    let c = parseInt(a) + parseInt(b);
    document.getElementById("sum").innerHTML = c;
 }

//Задача 5

function buttonClick(){
    let elems = document.querySelectorAll('.a');
    for(let i = 0;i<elems.length;i++){
        elems[i].innerHTML = i;
    }
}