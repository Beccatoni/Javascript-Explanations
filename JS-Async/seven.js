// callbacks


let stock = {
    fruits: ["Strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]

}

let order = (fruitName, call_production) => {
    setTimeout(() => {
        console.log(`${stock.fruits[fruitName]} was selected`);
        call_production();
    }, 2000)

}
let production = () => {
    setTimeout(() => {
        console.log(`Production has started`)

        setTimeout(() => {
            console.log(`The fruit has been chopped`);

            setTimeout(() => {
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added.`);

                setTimeout(() => {
                    console.log(`The machine was started`);

                    setTimeout(() => {
                        console.log(`Ice cream was placed on the ${stock.holder[0]} `);

                        setTimeout(() => {
                            console.log(`${stock.toppings[0]} was added`);

                            setTimeout(() => {
                                console.log(`Serve ice cream!😍`)
                            }, 2000);
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)


    }, 0)
}

order(2, production)