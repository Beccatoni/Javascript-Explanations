// first promise example https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/your-first-code-with-promises

var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Hello here!');
    },2000);
})

promise.then(function(data){
    console.log(data);

})

// binding the callback function to the promise so as to use the resolve
// data