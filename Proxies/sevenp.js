// side effects

const myFunction = () => {
    console.log('Execute this function');
}
const handler = {
    set(target, prop, value){
        if(prop === 'name' && value === 'Jack'){
            myFunction ()
        } else{
            console.log('Can only access name property');

        }

    }

}

const proxy = new Proxy({}, handler);
proxy.name = 'Jack';
proxy.age = 33