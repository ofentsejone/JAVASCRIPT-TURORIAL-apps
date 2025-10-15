const myBtn=document.getElementById('roll');

const label =document.getElementById('myLabel');
const label2=document.getElementById('myLabel2');

const min=1;
const max=6;
let randomNum,randomNum2;

myBtn.onclick = function(){
   randomNum=Math.floor(Math.random()*max)+min;
   randomNum2=Math.floor(Math.random()*max)+min;
    label.textContent=randomNum;
   label2.textContent=randomNum2;
}