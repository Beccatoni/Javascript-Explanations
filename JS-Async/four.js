//  program to display a name
function greet(name, lastName){
    console.log(`Hello ${name} ${lastName}`);
}

setTimeout(greet, 1000, 'John', 'Doe');
