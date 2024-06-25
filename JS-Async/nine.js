// using abort controller to cancel a fetch() http request

const controller = new AbortController();
const signal = controller.signal;

fetch('https://jsonplaceholder.typicode.com/posts', {signal})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        if (err.name === 'AbortError'){
            console.log('Fetch request was cancelled.');
        } else{
            console.log('Fetch request faile:', err)
        }
    })

    setTimeout(()=>{
        controller.abort();

    },500);