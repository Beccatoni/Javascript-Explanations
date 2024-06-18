// exercises

function createAlarm(name, delay){
    return new Promise((resolve, reject)=>{
      if(delay < 2){
        reject(' Delay is not sufficient');
      }else{
        setTimeout(()=> {
          resolve(`Wake up ${name}`);
        }, delay * 1000);
      }
    })
}
  
  createAlarm('John', 4)
  .then((message)=>{
    console.log(message)
  }).catch((error)=>{
    console.log(error);
  });