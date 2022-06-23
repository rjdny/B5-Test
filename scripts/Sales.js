import { getPurchases } from "./database.js"

const buildOrderListItem = (order) => {
    return `<li>
        Receipt #${order.id} = ${(order.price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}


export const Sales = () => {
        const sales = getPurchases()
        let i = 0;
        return `
        <ul>
            ${sales.map(
                (sale) => {
                    // Reflect: What is the scope of this `return` keyword?
                    return buildOrderListItem(sale)
                }
            ).join("")}
        </ul>
    `
}