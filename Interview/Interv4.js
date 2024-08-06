// params and arguments

function square(param){
    console.log(param * param)
}

square(5) //arguments


//rest parameters
function mult(...nums){
    console.log(nums)
}

var arr = [5,6]
mult(...arr) // spread operator

//rest params vs arguments o/p base question

const fn = (a,y,e, ...nums) => {
    console.log(a,y,e, nums)
}

fn(4,5,3,5,43,2)