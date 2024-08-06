// arrow functions

const add = (first, second) => first + second


// arrow function and regular function

// 1 - 2  syntax and implicit return keyword
function square(num){
    return num * num
}

const square2 = (num) => num * num 


// 3 - arguments you can not have the arguments keyword in the arrow function
function fn2(){
    console.log(arguments)
}
fn2()


// 4 - "this" keyword in this object the arrow function points to the global objects

let user = {
    userName: 'Bebi',
    rc1: () => {
        console.log("Subscribe to", this.userName)
    }
    ,
    rc2(){
        console.log("Subscribe to", this.userName)
    }
}

user.rc1()
user.rc2()