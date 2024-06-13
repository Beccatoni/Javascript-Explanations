let fs = require('fs');

fs.readFile('text.txt', 'utf-8', function(error, data) {
    if(error){
        throw error;
    }

    console.log("Asynchronous message. Content of text.txt:", data);
});

console.log('Synchronous message');