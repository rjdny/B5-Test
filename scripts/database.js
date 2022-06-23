const database = {
    entrees: [
        { id: 1, name: "Hummus and Hot Sauce", price: 6.00 },
        { id: 2, name: "Chicken Fried Lamb Kabob", price: 14.25 },
        { id: 3, name: "Hot Chicken Greek Salad", price: 10.50 },
        { id: 4, name: "Brussel Sprout Moussaka", price: 11.50 },
        { id: 5, name: "Okrakopita", price: 8.40 },
        { id: 6, name: "Fried Onion and Grape Leaves", price: 6.95 },
        { id: 7, name: "Chess Baklava", price: 5.30 },
        { id: 8, name: "Gyro Biscuits", price: 8.95 },
        { id: 9, name: "Black Eye Pea Falafel", price: 7.80 },
        { id: 10, name: "Pecan Pastitsio", price: 12.49 }
    ],
    veggies: [
        { id: 1, type: "Okra", price: 2.65 },
        { id: 2, type: "Collard Greens", price: 2.05 },
        { id: 3, type: "Swiss Chard", price: 2.15 },
        { id: 4, type: "Corn", price: 1.75 },
        { id: 5, type: "Brussel Sprouts", price: 3.00 },
        { id: 6, type: "Sweet Potatoes", price: 2.40 },
        { id: 7, type: "Grits", price: 3.05 },
        { id: 8, type: "Fried Green Tomatoes", price: 3.89 },
        { id: 9, type: "Mac and Feta Cheese", price: 2.55 }
    ],
    sides: [
        { id: 1, title: "Chicken Fried Steak Poppers", price: 5.45 },
        { id: 2, title: "Bacon", price: 2.95 },
        { id: 3, title: "Turkey Wings", price: 4.80 },
        { id: 4, title: "BBQ Lamb Ribs", price: 9.25 },
        { id: 5, title: "Catfish Nuggets", price: 6.75 },
        { id: 6, title: "Mini Souvlaki", price: 5.20 }
    ],
    purchases: [
        { id: 1, entreeId: 1, veggieId: 3, sideId: 4, price: 9.85 }
    ]
}
let comboChoices = { entree: 0, veggie: 0, side: 0 }


export const getSides = () => { return database.sides }
export const setSide = (id) => { comboChoices.side = id }

export const getEntrees = () => { return database.entrees }
export const setEntree = (id) => { comboChoices.entree = id }

export const getVeggies = () => { return database.veggies; }
export const setVeggie = (id) => { comboChoices.veggie = id }

export const getPurchases = () => { return database.purchases }


export const addPurchase = () => {

    var purchaseObj = {...comboChoices }
    purchaseObj.id = database.purchases.length + 1;
    purchaseObj.price = calcPrice()
    database.purchases.push(purchaseObj);
}


const calcPrice = () => {
    //comboChoices{ entree: 0, veggie: 0, side: 0 }
    const eprice = database.entrees.find(x => x.id == comboChoices.entree).price
    const vprice = database.veggies.find(x => x.id == comboChoices.veggie).price
    const sprice = database.sides.find(x => x.id == comboChoices.side).price
    return eprice + vprice + sprice;
}