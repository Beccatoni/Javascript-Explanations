// predict the output

console.log('start');

function myP(){
    console.log('there');

    return new Promise(resolve => {
        console.log('in p');

        setTimeout(()=>{
            console.log('hi');
            resolve('hi');
            console.log('see')
        },0)
    })
}

console.log('second?');
myP().then(data => console.log(data));
console.log('hhhhh')