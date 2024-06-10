//  the set method

let employee = {
    name  :'Chris', 
}

let setNewValue = {
    set(obj, prop, value){
        obj[prop] = value;
        return;
    }
}

let person = new Proxy(employee, setNewValue);

person.isActive = true;
person.age = 42;
person.title = 'Manager'

console.log(person)