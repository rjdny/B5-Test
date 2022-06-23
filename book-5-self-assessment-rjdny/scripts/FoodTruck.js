import { addPurchase } from "./database.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { Sales } from "./Sales.js"
import { renderAllHTML } from "./main.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        addPurchase()
        renderAllHTML()
    }
})

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <div class="menu">
        <article id="options" class="entree"><h2>Base Dish</h2>${Entrees()}</p></article>
        <article id="options"><h2>Vegetable</h2>${Veggies()}</article>
        <article id="options"><h2>Sides</h2>${Sides()}</article>
        </div>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${Sales()}
        </article>

    `
}