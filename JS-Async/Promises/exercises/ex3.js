// Fetch data in parallel

const delays = [800, 1200, 1000]
const fetchSimulator = (url, delay) => {
    return new Promise(resolve => setTimeout(()=> resolve(`Data from ${url}`), delay));
};

let fetcher1 = fetchSimulator('hello', delays[0]);
let fetcher2 = fetchSimulator('Hi here', delays[2]);
let fetcher3 = fetchSimulator('Last one', delays[1]);

Promise.all([fetcher1, fetcher2, fetcher3])
.then((responses) => console.log(responses));