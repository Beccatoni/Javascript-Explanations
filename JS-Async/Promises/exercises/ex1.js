// exercise one
// let message = "Hello world";
// const randomPromise = 
 new Promise((resolve, reject) => {
   setTimeout(()=> {
    const shouldResolve = Math.random() > 0.5;
    if(shouldResolve){
        resolve('Hello world');
    } else{
        reject('Error ocurred');
    }
   }, 2000);
}).then((message) =>{
        console.log(message);
    })
 .catch((error) => {
        console.error(error);
    })

// randomPromise
// .then((message) =>{
//     console.log(message);
// })
// .catch((error) => {
//     console.error(error);
// });