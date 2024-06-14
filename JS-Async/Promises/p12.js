


const fetchMultipleAPIs = (apis) => {
    return Promise.all(
        apis.map(el => new Promise ((res, rej)=>{
            fetch(el)
            .then(response => res(response.json()))
            .catch(error=> rej(error));
        }))
    )
  }
  
  const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];
  
  fetchMultipleAPIs(apiUrls)
  .then(results => console.log(results))
  .catch(error => console.error(error))
 