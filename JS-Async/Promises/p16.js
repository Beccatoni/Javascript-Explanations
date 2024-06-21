// Write a function that takes a URL and fetches data from that URL
// but aborts when the request takes more than 10ms


let abort = new AbortController();

 async  function fetchUrl (url){
    
    let timer = setTimeout(()=>{
        abort.abort();
        console.log('Aborted')
    }, 2000)

    // const result = await fetch(url);
let {signal} = abort;
    
    return fetch(url, {signal})
    .then(response=>{
        response.json()
        clearTimeout(timer)
    } )
    .then(data => console.log(data))

}

fetchUrl('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    console.log(response);
})