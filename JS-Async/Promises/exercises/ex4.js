const delays = [800, 1200, 1000];

const fetchSimulator = (url, delay) => {
    return new Promise(resolve => setTimeout(()=> resolve(`Data from ${url}`), delay));

}

let data1 = fetchSimulator('Source one', delays[1]);
let data2 = fetchSimulator('Source two', delays[0]);
let data3 = fetchSimulator('Source three', delays[2]);

Promise.race([data1, data2, data3]).then((response)=> console.log('Here is the fastest response', response))