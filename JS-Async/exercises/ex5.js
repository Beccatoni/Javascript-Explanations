/*
The code snippet below is synchronous. It calls callback1 one time and callback2 three times. You must modify this code to make it asynchronous with the following rules:

callback1 must be called only one time, after 2 seconds.
callback2 must be called three times with an interval of 1 second.

change it to be asynchronous

function (){
    callback1 

    callback2
    callback2
    callback2
}
*/

function job(callback1, callback2){
    setTimeout(()=>{
        callback1();
    },2000);

    let counter = 0;
    let id = setInterval(()=>{
        callback2();
        counter += 1;

        if(counter >= 3){
            clearInterval(id)
        }
    }, 1000);
}