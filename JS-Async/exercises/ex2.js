setTimeout(function(){
    console.log('I am an asynchronous message');
}); // you can omit the 0

console.log('Test 1');

for (let i = 0; i < 4; i++){
    console.log(doSomeStuff());
}

console.log('Test 2');

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSomeStuff(){
    return 1 + 1;
}