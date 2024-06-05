// validation using proxy

let student = {
    name: 'John',
    age: 50
}

const handler = {
    get(obj, prop){
        if(prop == 'name'){
            return obj[prop];
        } else{
            return 'Not allowed'
        }
    }
}

const proxy = new Proxy(student, handler)
console.log(proxy.name)
console.log(proxy.age);