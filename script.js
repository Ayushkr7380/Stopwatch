let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let running = false; 

// let start = document.getElementById('start');
// let reset = document.getElementById('reset');
// let stop = document.getElementById('stop');

function updatetime(){
    seconds++;
    if(seconds === 60)
    {
        seconds = 0;
        minutes++;
        if(minutes === 60)
        {
            minutes = 0;
            hours++;
        }
    }
    updatedisplay();

}


function start(){
    if(running === false)
    {
        running = true;
        timer = setInterval(updatetime,1000);
        document.querySelector('#start').disabled = true;   
    }
}
function  stop(){
    if(running === true)
    {
        running = false;
        clearInterval(timer);
        document.querySelector('#start').disabled = false;
    }
}

function reset(){
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updatedisplay();
}
function updatedisplay(){
    let display = document.getElementById('display');
    display.textContent = digit(hours) + ":" + digit(minutes) + ":" + digit(seconds);
}
function digit(value){
    if(value < 10)
    {
        return '0' + value;
    }
    else
    {
        return value;
    }
}