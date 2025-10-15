 // my version 
let age;
 
document.getElementById('submit').onclick = function(){
    age=document.getElementById('user-age').value;
    age=Number(age);

   if(age <= 18)
   {document.getElementById('results').textContent="You are still young to enter";}
   else if(age>=100)
    {document.getElementById('results').textContent="You are too old enough  enter";}
   else if(age==0)
    {document.getElementById('results').textContent="You cant  enter";}

// else{document.getElementById('results').textContent=`Welcome to the site`;}
   
 
}