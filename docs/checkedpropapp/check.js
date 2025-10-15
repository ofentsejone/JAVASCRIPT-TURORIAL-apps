 const myCheckBox=document.getElementById('myCheckbox');
const visaBtn=document.getElementById('visaBtn');
const mastercardBtn=document.getElementById('mastercardBtn');
const paypalBtn=document.getElementById('paypalBtn');
const submitBtn=document.getElementById('mySubmit');
const subResult=document.getElementById('subResult');
const paymentResult=document.getElementById('paymentResult');

submitBtn.onclick = function(){
   if(myCheckBox.checked){
      subResult.textContent=`You are subscribed to the site`;
   }
   else{
      subResult.textContent=`You are not subsribed`;
   }

   if(visaBtn.checked)
      {
      paymentResult.textContent=`Your selected payment method is Visa`;
      }

       else if(mastercardBtn.checked)
      {
      paymentResult.textContent=`Your selected payment method is mastercard`;
      }

       else if(paypalBtn.checked)
      {
      paymentResult.textContent=`Your selected payment method is PayPal`;
      }
      else{ paymentResult.textContent=`Your must select a payment type`;}
}