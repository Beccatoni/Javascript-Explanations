//  understanding the catch method

function job(){
    return new Promise(function(resolve,reject){
        reject();
    })
}

let promise = job();

promise
.then(()=> {
    console.log('Success 1')
})
.then(()=> {
    console.log('Success 2')
})
.then(()=> {
    console.log('Success 3')
})
.catch(()=>{
    console.log('Error 1')
})
.then(()=>{
    console.log('Success 4');
})

// out put : Error 1
// Success 4

