// is a number, odd or even

function job(data){
    return new Promise(function(resolve,reject){
     if(isNaN(data)){
        reject('Not a number');
     } else if(data % 2 !== 0){
        setTimeout(function(){
            reject("Odd");
        }, 1000);
     } else{
        setTimeout(function(){
            resolve("Even");
        }, 2000);
     }
    })
}

job(6).then(function s(data){
    console.log(data);
}, function f(err){
    console.error(err)
})