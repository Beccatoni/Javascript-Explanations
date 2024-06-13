function fetchData(callback){
    setTimeout(()=> {
        callback('Data received!');
    }, 2000);
}

function handleData(data){
    console.log(data);
}

fetchData(handleData)