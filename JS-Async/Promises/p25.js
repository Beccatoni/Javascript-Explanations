// when you want to start multiple async jobs at once and you want results even if a job is rejected we use .catch()

// when Promise.all() fails

let p1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise(function(resolve, reject){
    setTimeout(resolve, 1000, 'p2');
});

let p3 = new Promise(function(resolve, reject){
    setTimeout(resolve, 1200, 'p3');
});

let p4 = new Promise(function(resolve, reject){
    setTimeout(reject, 1300, 'p4');
});

let p5 = new Promise(function(resolve, reject){
    setTimeout(resolve, 800, 'p5');
});


let promise = Promise.all([p1.catch(()=>{}), p2.catch(()=>{}), p3.catch(()=>{}), p4.catch(()=>{}), p5.catch(()=>{})]);
promise.then(function(data){
    data.forEach(element => {
        console.log(element)
    });
})
.catch(error =>{
    console.error('Error', error)
})