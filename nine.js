function doWhenDataReceived(value){
    returnNextElement.next(value)
}

function *createFlow(){
    const data = yield fetch('https://jsonplaceholder.typicode.com/todos/');
    console.log(data);
}

const returnNextElement = createFlow()
const futureData = returnNextElement.next().value
futureData.then(doWhenDataReceived);