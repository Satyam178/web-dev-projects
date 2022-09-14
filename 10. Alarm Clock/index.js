let clock = document.getElementById("curr-time");
let setAlarm = false;
let resetAlarm = false;

let set = document.getElementById("set");
let reset = document.getElementById("reset");
// console.log(setAlarm);



set.addEventListener("click",()=>{
    setAlarm = true;
})


reset.addEventListener("click",()=>{
    resetAlarm = true;
    setAlarm = false;

    if(resetAlarm == true)
        {
            let res = "reset";
            hour(res);
            minu(res);
        }
})






updateTime();

function updateTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    time = h + ":" + m + ":" + s;

    clock.innerHTML = time;

    return [h,m];


}

setInterval(updateTime, 1000);



let stop = document.getElementById("stop");
let stopAlarm = false;

stop.addEventListener("click",()=>{

    stopAlarm = true;

});

ringAlarm = () =>
{
    console.log('Alarm is ringing!');

    let alarmTone = new Audio("sound/clock-sound-effect.mp3");
    alarmTone.play();
    
   if(stopAlarm)
   {
    alarmTone.pause();
    clearInterval(id);

    
   }


  
    
}




let hourCompare = false;
let minCompare = false;

compareTime = ()=>{

    let hr = document.getElementById("hr");
    let mn = document.getElementById("mint");

    let x = updateTime();
     toString(x[0]);
     toString(x[1]);
     toString(hr.innerHTML);
     toString(mn.innerHTML);
    //  console.log("hour setting "+hr.innerHTML+" minute setting "+mn.innerHTML);
    //  console.log("hour on clock "+x[0]+" minute on clock "+x[1]);
     
if(x[0] == hr.innerHTML && x[1] == mn.innerHTML && setAlarm == true)
{
   clearInterval(intervalID);

    hourCompare = true;
    minCompare = true;

id = setInterval(ringAlarm,500);
    
    
}


}

var intervalID = setInterval(compareTime,999);






let btn = document.getElementsByTagName("i");

for (const itag of btn) {
    itag.addEventListener("click", (event) => {

        // console.log(event.target.classList.contains('min-right'));

        let button = event.target.classList;
  if(setAlarm == false)
  {
        if (button.contains('hour-left')) {
            let dec = "decrease"
            hour(dec);
        }
        else if (button.contains('hour-right')) {
            let inc = "increase";
            hour(inc);
        }
        else if (button.contains('min-left')) {
            let dec = "decrease";
            minu(dec);
        }
        else if (button.contains('min-right')) {
            let inc = "increase";
            minu(inc);
        }
         
  }

    });
}




hour = (operation) => {


    if (operation == "increase") 
    {

        let num = parseInt(hr.innerHTML);

        if (num == 23) {
            hr.innerHTML = "00";
        }
        else {

            if (num < 9) {
                num++;
                toString(num)
                hr.innerHTML = "0" + num;

            }
            else {
                parseInt(num);
                num++;
                toString(num)
                hr.innerHTML = num;

            }

        }
    }
    else if(operation == "decrease")
    {

        let num = parseInt(hr.innerHTML);

        if (num == 00) {
            hr.innerHTML = "23";
        }
        else {

            if (num < 11) {
                num--;
                toString(num)
                hr.innerHTML = "0" + num;

            }
            else {
                parseInt(num);
                num--;
                toString(num)
                hr.innerHTML = num;

            }

        }

    }

    else if(operation == "reset")
    {
        hr.innerHTML = "00";
    }
    
}




minu = (operation) => {

    let mint = document.getElementById("mint"); 

    if (operation == "increase") {

        let num = parseInt(mint.innerHTML);

        if (num == 59) {
            mint.innerHTML = "00";
        }
        else {

            if (num < 9) {
                num++;
                toString(num)
                mint.innerHTML = "0" + num;

            }
            else {
                parseInt(num);
                num++;
                toString(num)
                mint.innerHTML = num;

            }

        }
    }
    else if(operation == "decrease")
    {

        let num = parseInt(mint.innerHTML);

        if (num == 00) {
            mint.innerHTML = "59";
        }
        else {

            if (num < 11) {
                num--;
                toString(num)
                mint.innerHTML = "0" + num;

            }
            else {
                parseInt(num);
                num--;
                toString(num)
                mint.innerHTML = num;

            }

        }

    }
    else if(operation == "reset")
    {
      mint.innerHTML = "00";
    }
}




// console.log(setAlarm);
