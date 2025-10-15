//number guessing game
let usernum;
let max =1;
let min = 5;
let anyNum=Math.floor(Math.random()*(max-min)+min);
//
window.alert(`random num is ${anyNum}`)
let tries=0;
do{
    tries++; 
usernum=window.prompt("Guess a  number form 0 to 5");
//window.prompt("the number is ${usernum}");

}while(anyNum!=usernum)
window.alert("CONGRATULATIONS");
window.alert(`You tried ${tries} times`);
