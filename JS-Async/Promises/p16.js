// Write a function that takes a URL and fetches data from that URL
// but aborts when the request takes more than 10ms


let abort = new AbortController();

 async  function fetchUrl (url){
    
    let time = setTimeout(()=>{
        abort.abort();
        console.log('Aborted')
    }, 2000)

    
let {signal} = abort;
try {
    const response = await fetch(url, {signal});
    clearTimeout(time);

    if(response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
} catch (error) {
    if(error.name === 'AbortError'){
        console.log('Your response took long')
        return 'Aborted due to timeout';
    } else{
        console.log('Fetch error:', error);
        throw error;
    }
}
    
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