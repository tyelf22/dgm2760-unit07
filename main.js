let message = ''

const pizza = {
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: function () {
        console.log('build pizza method has been called')
        message = `Baking a ${pizza.size} ${pizza.topping} pizza with ${pizza.crust} crust just for you`
        document.querySelector('#response').textContent = message
    },
    shoppingList: () => {
        let flour = 1;
        let topping = 1;
        if(pizza.crust === 'thick'){
            flour *= 2
        }
        if(pizza.size === "large") {
            flour *= 3
            topping *=2
        }
        message = `You will need to purchase ${flour} cups of flour and ${topping} lb of ${pizza.topping}`
        document.querySelector('#response').textContent = message

    }
}

document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)


document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')


document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.crust = 'pepperoni')


document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

