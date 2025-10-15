 const display=document.getElementById("display");
 let timer=null;
 let startTime=0;
 let elapsedTime=0;
 let isRunning=false;

 /*const start=document.getElementById("start-btn");
 const stop=document.getElementById("stop-btn");
 const reset=document.getElementById("reset-btn");
*/
 function start(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        //isRunning=true;
       //console.log(timer);
       isRunning=true;
    }

   //console.log(startTime);
 }
 
 function update(){}

 function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }

 }

 function reset(){
        
   clearInterval(timer);
     startTime=0;
     elapsedTime=0;
     isRunning=false;
     display.textContent="00:00:00:00"
 }

 function update(){
    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;

    let hours=Math.floor(elapsedTime/(1000*60*60));
    let minute=Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000%60);
    let milliseconds =Math.floor(elapsedTime%1000/10);

    hours=String(hours).padStart(2,"0");
    minute=String(minute).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    display.textContent=`${hours}:${minute}:${seconds}:${milliseconds}`;
 }