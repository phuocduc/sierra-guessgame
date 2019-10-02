let random = Math.floor(Math.random()*100+1);
console.log(random)
let history = []
let count =5;
let time= 0; //start game
let myTime;

function setTime()
{
    time+=1
    document.getElementById('time').innerHTML = time;
    if(time == 30)
    {
        stopTimer();
        playWithAllRound()  
        document.getElementById('time').innerHTML = "You lose"
    }
}

function stopTimer()
{
    clearInterval(myTime)
}



function timeCounting()
{
    myTime=setInterval(setTime,1000);//(function to fire, milisecond)
}

timeCounting();


function clear()
{
    return document.getElementById('input-game').value="";
}

function playWithAllRound()
{
    document.getElementById("myButton").disabled=true;
    document.getElementById('notification').innerHTML ="you are so bad";
}

function reset()
{
    document.location.reload();
}



function myFunction()
{
    count--;
    document.getElementById('Time-down').innerHTML = `You have ${count} time`
    if(count === 0){
        return playWithAllRound()
    }
    let number = document.getElementById('input-game').value;
    if(history.includes(number))
    {
        document.getElementById('notification').innerHTML = "This number has already added"
        return ;
    }

    history.push(number);
    console.log(history)
    document.getElementById('history').innerHTML = history;

    clear()
    if(number>random)
    {
        document.getElementById('notification').innerHTML="Too High"
    }
    else if(number <random)
    {
        document.getElementById('notification').innerHTML="Too Small"
    }
    else
    {
        document.getElementById('notification').innerHTML="You are win"
    }
    // if(history.length>4)
    // {
    //     console.log("game over")
    //     final()
    // }
    // else
    // {
    //    console.log('dem nguoc',history.length-1)

    // }

        
}