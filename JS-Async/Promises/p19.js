/*
Write a JavaScript function fetchToDo that uses XMLHttpRequest 
to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1).
The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message.

*/

async function fetchToDo(url){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            
        }
    }



}

fetchToDo('https://jsonplaceholder.typicode.com/todos/1')
.then()