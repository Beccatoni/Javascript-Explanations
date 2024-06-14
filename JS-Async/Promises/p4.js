var urls = [];

async('example.json')
.then(function(data){
    urls = data.urls; //A
    return async(urls[0]);
})
.then(undefined, function(e){
    console.log(1);
    return recovery();
})
.catch(function(e){
    console.log(2);
    return recovery();
})
.then(function(){
    console.log(3);
    return async(urls[1]);
})
.then(async, function(e){
    console.log(4);
    ahhhIGiveUp();
})