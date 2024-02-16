/* CSE112b Final project- build shopping list */

let pizzaList = null;

let url = "https://run.mocky.io/v3/04b14e00-90a0-4fa7-a7dd-67b881b52deb"
const getPizzas = async () => {
    const response = await fetch(url);
    if (response.ok) {
        pizzas = await response.json();
    console.log(pizzaList);
    }
}

// const displayPizzas = (pizzas) => {
//     pizzas.forEach(function (pizza){
//         let name = document.createElement('h2');
//         name.textContent = pizza.name
//     })
// }

// const input = document.querySelector('#recipe');
// const button = document.querySelector('button');
// const list = document.querySelector('#list');

// button.addEventListener('click', () => {
//     if (input.value != '') {
//         const li = document.createElement('li');
//         li.textContent = input.value;
//         list.append(li);
//         displayIngredients();
//     }
// })

// const displayIngredients = (pizza) => {
//     // let ing = pizzas.pizza[input.value].ingredients;
//     pizza.forEach(pizza => console.log(pizza))

//     // )
//     // ing.append(li);
// }

getPizzas();