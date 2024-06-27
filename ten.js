async function createFlow(){
    console.log('me first')
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
    console.log(await data.json());
}

createFlow()
console.log('me second');