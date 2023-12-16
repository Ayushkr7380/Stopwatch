let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let running = false; 


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

let lapshow = document.getElementById('lapshow');
let lapdisplay = document.getElementById('lapdisplay');
let laporder = document.getElementById('laporder');

let previoustime = 0;

let lapshowingdisplay = 0;

function laptime(){
    let currenttime = hours * 3600 + minutes * 60 + seconds;
    let lapinterval = currenttime - previoustime;
    previoustime = currenttime;
    laptimeshow(lapinterval);
}


function laptimeshow(lapinterval)
{
    if(lapshowingdisplay === 0){

        lapshow.style.display = 'block';
        lapshowingdisplay = 1;
    }
    let newli = document.createElement('li');
    newli.textContent = formattime(lapinterval);
    laporder.appendChild(newli);
}

function formattime(intervalORseconds){

    let formathours = digit(Math.floor(intervalORseconds / 3600 ));
    let formatminutes = digit(Math.floor((intervalORseconds % 3600) / 60 ));
    let formatseconds = digit(Math.floor(intervalORseconds % 60 ));

    return `${formathours} : ${formatminutes} : ${formatseconds}`;


}

let lap1 = 0;
function lap(){
    lap1++
    lapdisplay1();
    laptime();
}

function lapdisplay1(){
    lapdisplay.textContent = lap1;
}

function resetlap(){
    if(lapshowingdisplay === 1)
    {

        lapshow.style.display = 'none';
        lapshowingdisplay = 0;
    }
    lap1 = 0;
    lapdisplay1();
    while(laporder.firstChild)
    {
        laporder.removeChild(laporder.firstChild);
    }
}
