let student1 = {
    age: 24,
    name: "Becca"
}

const handler = {
    get(obj, prop){
return obj[prop] ? obj[prop] : 'property does not exist';
    }
}

let proxy = new Proxy(student1, handler);
console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.class);