/* CSE112b Final project- build shopping list */

let pizzaList = null;

let url = "https://run.mocky.io/v3/04b14e00-90a0-4fa7-a7dd-67b881b52deb"
const getPizzas = async () => {
    const response = await fetch(url);
    if (response.ok) {
        pizzaList = await response.json();
    console.log(pizzaList);
    displayPizzas(pizzaList);
    input.focus();
    }
}
const choices = document.querySelector('#choices');
const displayPizzas = (pizzas) => {
    pizzas.forEach(function (pizza){
        let name = document.createElement('h2');
        name.textContent = pizza.name;
        choices.append(name);
    })
}

const input = document.querySelector('#recipe');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        li.textContent = `The ingredients for a ${input.value} pizza are:`;
        list.append(li);
        displayIngredients(pizzaList);
    }
})

const displayIngredients = (pizza) => {
    pizza.forEach(function (pizza) {
        if (pizza.name === input.value) {
            let li = document.createElement('li');
            li.textContent = `${pizza.ingredients}`;
            list.append(li);}
    }
        )

}

getPizzas();