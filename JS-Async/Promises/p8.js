// multiple callbacks

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('Hello here, I love you all');
    }, 2000)
})

promise.then(function(data){
console.log(`${data} 1`);
return data
})
.then(function(data1){
    console.log(`${data1} 2`);
    return data1;
})
.then(function(data){
    console.log(`${data} 3`);
})



//unless you return something from the callback in the then function
// then the function returns undefined 