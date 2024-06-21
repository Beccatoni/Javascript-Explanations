async function fun(){
    console.log('Inside async function');
    return 'Async Function Result';
    
}
console.log('Start');

fun.then((result)=>{
    console.log(result);
});
// fun()
console.log('End')