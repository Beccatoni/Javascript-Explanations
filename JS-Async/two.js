// program to display time every 3 seconds
function showTime(){
    let dateTime = new Date();

    let time = dateTime.toLocaleDateString();

    console.log(time);
    
    setTimeout(showTime, 3000);
}

showTime();