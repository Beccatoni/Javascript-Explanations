// the get() method

let stud = {
    name: 'Jack',
    age: '23'
}

const handler = {
    get(obj, prop){
        return obj[prop]
    }
}

const proxy = new Proxy (stud, handler);
console.log(proxy.name);