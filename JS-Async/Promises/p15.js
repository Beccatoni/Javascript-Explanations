// the catch method continued

function job(state){
    return new Promise(function(resolve, reject){
        if(state){
            resolve('Success');
        } else{
            reject('error');
        }
    });
}

let promise = job(true);

promise
.then(data =>{
    console.log(data);
    return job(false);
})
.catch(error =>{
    console.log(error);
    return 'Error caught';
})
.then(data =>{
    console.log(data);
    return job(true);
})
.catch(error => {
    console.log(error);
})
// .then(data=>{
//     console.log(data);
// })

// output Success
// error
// Error caught