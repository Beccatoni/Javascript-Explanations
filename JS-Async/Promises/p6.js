let stock = {
    fruits: ["Strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]

}

let isShopOpen = false;

let order = (time, work) => {
    return new Promise((resolve, reject)=>{
         if(isShopOpen){
            setTimeout(()=>{
            resolve(work());
            }, time)
            
         } else{
            reject(console.log(`Our shop is closed`));
         }
    })
}

order(2000, ()=> console.log(`${stock.fruits[0]} was selected`))
.then(()=> {

    return order(0, ()=>console.log("Production has started"));
})
.then(()=>{
    return order(2000, ()=>{
        console.log(`the fruit was chopped`)
    })
})
.then(()=>{
    return order(1000, ()=> {
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was selected`)
    })
})
.then(()=>{
    return order(1000, ()=>{
        console.log('Start the machine')
    })
})
.then(()=>{
    return order(2000, ()=>{
        console.log(`Ice cream was placed on the ${stock.holder[0]} `)
    })
})
.then(()=>{
    return order(3000, ()=>{
        console.log(`${stock.toppings[0]} was selected`)
    })
})
.then(()=>{
    return order(2000, ()=>{
        console.log("Ice cream was served!")
    })
})

.catch(()=>{
    console.log("Customer left")
})

.finally(()=>{
    console.log(`Day ended our shop is closed.`)
})