const decreaseBtn=document.getElementById("decreasebtn");
const increaseBtn = document.getElementById("increasebtn");
const resetBtn=document.getElementById("resetbtn");
const countLabel=document.getElementById("countLabel");
let count=0;

increaseBtn.onclick = function(){

   count++;
  countLabel.textContent=count;
}

decreaseBtn.onclick = function(){ 
   count--;
  countLabel.textContent=count;
}

resetBtn.onclick = function(){ 
   count=0;
  countLabel.textContent=count;
}


//my own code 
/*let reset;
let feeback;
document.getElementById('reset').onclick = function(){
    reset = document.getElementById("user-in").value;
   //  document.getElementById("user-in").textContent =` `;
  // document.getElementById("input-user").textContent =`Hi ${reset}`;
 feeback = document.getElementById("change-container").textContent =` Hi ${reset}`;
 
}*/






