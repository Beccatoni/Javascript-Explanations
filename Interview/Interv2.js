// global scope
var num1 = 20, 
num2 = 3,
name = 'Becca Coder'

function multiply(){
    return num1 * num2;
}

multiply()// returns 60

//  a nested function example
function getScore(){
    // local scope
    var num1 = 2,
    num2 = 3;

    function add(){
        return name  + 'scored' + (num1 + num2)
    }
    return add()
}
getScore() // returns  Becca Coder scored 5