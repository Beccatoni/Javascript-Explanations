setTimeout(function(){
    console.log('I am an asynchronous message');
}, 2000); // you can even use a 0 seconds

console.log('I am a  synchronous message');


/*
output

I am a  synchronous message
I am an asynchronous message
*/