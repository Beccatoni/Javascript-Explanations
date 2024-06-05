//  program to stop the settimeout method

let count = 0;

function increaseCount(){
    count += 1;
    console.log(count)
}

let id = setTimeout(increaseCount, 3000);

clearTimeout(id);
console.log('setTimeout is stopped.')

//  we usually use the clearTimeout method to cancel the setTimeout method before it happens