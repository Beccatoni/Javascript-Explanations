// setTimeout
function greet(){
    console.log('Hello world!');
}

setTimeout(greet, 3000);
console.log('This message is shown first');

// as the setTimeout returns the interval id

let intervalId = setTimeout(greet, 3000);
console.log('Id:', intervalId);
