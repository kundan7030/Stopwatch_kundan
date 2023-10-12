window.onload = function() {
    let minutes = 0;
    let seconds= 0;
    let tens= 0;
        // To select all the Id's 
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
        // for all buttons 
    let startBtn =document.querySelector('#start');
    let stopBtn =document.querySelector('#stop');
    let resetBtn =document.querySelector('#reset');
    let Interval;

        // to start counting 
    const startTimer = () => {
        tens++;   // incrementing the tens.
        if (tens <=   9){
            appendTens.innerHTML = '0' + tens;
        }
        if(tens > 9){ 
            appendTens.innerHTML = tens;
        }
         if(tens > 99) {
            seconds++;    // incrementing the seconds 
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        } 
    
     if(seconds > 9) {
        appendSeconds.innerHTML = seconds;
     }

    if(seconds > 59) {
        minutes++; // incrementing the minutes
        appendMinutes.innerHTML = '0'+ minutes;
        seconds= 0;
        appendSeconds.innerHTML= '0' + 0;
    }
};

        // Start button event function 
startBtn.onclick=()  =>{
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
};
        // Stop button event function 
stopBtn.onclick=()  => {
    clearInterval(Interval);   
};
        // Reset button event function 
resetBtn.onclick=()  =>{
    clearInterval(Interval);
    tens ='00';
    seconds= '00';
    minutes= '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML=seconds;
    appendMinutes.innerHTML=minutes;

};

};


