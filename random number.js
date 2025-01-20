
const btn =document.getElementById("btn");

const label1 =document.getElementById("label1");
const label2 =document.getElementById("label2");
const label3 =document.getElementById("label3");

const min= 1000
const max=9999; 

let randomcode1;
let randomcode2;
let randomcode3;

btn.onclick =function(){
    randomcode1 =Math.floor (Math.random() *(max-min)) +min ;
    randomcode2 =Math.floor (Math.random() *(max-min)) +min ;
    randomcode3 =Math.floor (Math.random() *(max-min)) +min ;
label1.textContent= randomcode1;
label2.textContent= randomcode2;
label3.textContent= randomcode3;
};
