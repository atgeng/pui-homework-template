// roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// roll objects
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
}

// glazing prices object
const glazingPrices = {
    "Original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.5
}

// pack size prices object
const packSizePrices = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
}

// Cart Array
let roll1 = new Roll('Original', 'Sugar milk', '1', 2.49);
let roll2 = new Roll('Walnut', 'Vanilla milk', '12', 3.49);
let roll3 = new Roll('Raisin', 'Sugar milk', '3', 2.99);
let roll4 = new Roll('Apple', 'Original', '3', 3.49)
const cart = [roll1, roll2, roll3, roll4];

// total price
let totalPriceCart = 0;

// Add to Cart
function createCartItem(roll) {
    const template = document.querySelector('#cart-item-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart-card');
    const rollListElement = document.querySelector('#cart-page');
    rollListElement.append(roll.element);
    updateElement(roll);
    const btnRemove = roll.element.querySelector('#remove-btn h2');
    btnRemove.addEventListener('click', () => {
        removeCartItem(roll);
        
    });  
}

// update roll element
function updateElement(roll) {
    let rollType = roll.type;
    const rollImgElement = roll.element.querySelector('.cart-image');
    const rollNameElement = roll.element.querySelector('.cart-name');
    const rollGlazeElement = roll.element.querySelector('.cart-glaze');
    const rollPackElement = roll.element.querySelector('.cart-pack');
    const rollPriceElement = roll.element.querySelector('.cart-price > p');
    const rollTotalCart = document.querySelector('#total-price > p')
    const rollTotalPrice = ((roll.basePrice+glazingPrices[roll.glazing])*packSizePrices[roll.size]).toFixed(2);
    totalPriceCart = totalPriceCart + Number(rollTotalPrice);
    rollImgElement.src = '../assets/products/'+rolls[rollType].imageFile;
    rollNameElement.innerText = roll.type + ' Cinnamon Roll';
    rollGlazeElement.innerText = 'Glazing: ' + roll.glazing;
    rollPackElement.innerText = 'Pack Size: ' + roll.size;
    rollPriceElement.innerText = '$' + rollTotalPrice;
    rollTotalCart.innerText = '$' + totalPriceCart;
}

// add to DOM
function createCart() {
    for (i=0; i<cart.length; i++){
        createCartItem(cart[i]);
    }
}

window.onload = createCart()

// remove cart item
function removeCartItem(roll) {
    roll.element.remove();
    let index = cart.indexOf(roll);
    cart.splice(index, 1);
    const rollTotalCart = document.querySelector('#total-price > p')
    const rollTotalPrice = ((roll.basePrice+glazingPrices[roll.glazing])*packSizePrices[roll.size]).toFixed(2);
    totalPriceCart = (totalPriceCart - Number(rollTotalPrice)).toFixed(2);
    rollTotalCart.innerText = '$' + totalPriceCart;
    
}

