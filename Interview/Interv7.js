// Closure is a function that references variables in the outer scope from its inner scope
// lexical scope : when a variable defined in global scope is accessed in the local scope 

//global
var name = 'Uwase'

function local(){
    //local scope
    console.log(name)
}

local()


// closure scope chain
// local scope
//  outer scope
// global scope