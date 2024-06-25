function createFunction(array){
    let i = 0;
    function inner(){
        const element = array[i]
        i++
        return element
    }
    return inner
}

const returnNextElement = createFunction([4,5,6])
console.log(returnNextElement());
console.log(returnNextElement());
console.log(returnNextElement());