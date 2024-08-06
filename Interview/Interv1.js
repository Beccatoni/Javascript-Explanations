(function square(num){
console.log(num**num)
return (function(y){
    console.log(num);
})(2)
})(5)