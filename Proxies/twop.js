let student = {
    name: 'Mami',
    age: 35
}

const handler = {};

const proxy1 = new Proxy(student, handler);
console.log(proxy1);
console.log(proxy1.name)

//  when the handler is empty the proxy behaves as original object

