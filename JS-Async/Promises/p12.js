


const fetchMultipleAPIs = (api) => {
    return new Promise((resolve, reject)=>{
      setTimeout(function() {
        resolve(`Api: ${api}`);
      }, 0);
    })
  }
  
  const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];
  
  let d1 = fetchMultipleAPIs(apiUrls[0])
  let d2 = fetchMultipleAPIs(apiUrls[1])
  let d3 = fetchMultipleAPIs(apiUrls[2])
  
  Promise.all([d1, d2, d3])
  .then((responses) => {
    console.log(`Here are the responses: ${responses}`);
  })