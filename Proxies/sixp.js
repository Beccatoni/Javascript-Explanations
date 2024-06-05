let kid = {
    name: 'Lisa',
    age: 9
}

const handler = {
    set(obj, prop, value){
   if(obj[prop]){
    console.log('Read only');
   }
    }
}

const proxy = new Proxy(kid, handler);
proxy.name = 'John';
proxy.age = 10;