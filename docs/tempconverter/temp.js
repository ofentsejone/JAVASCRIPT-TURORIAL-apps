//const fahrenheit= (0*celsius*9/5);
//const celsius=(32*fahrenheit-32)*5/9;
let input;
let output;
const changeToFahrenheit=document.getElementById("toFarhenheit");
const changeToCelsius=document.getElementById("toCelsius");

//function to calculate and output results
function convert(){
    input=document.getElementById('textBox').value;
    input=Number(input);
    if(changeToCelsius.checked){
        output=(input-32)*5/9;
        output=Number(output);
      document.getElementById('result').textContent=`Farenheit to celsius is ${output}C`;
    }
    else if(changeToFahrenheit.checked)
    {
        output=(input*9/5)+32;
         output=Number(output);
     document.getElementById('result').textContent=`Celsius to fahrenheit is ${output}F`;
    }
}
convert();
 
