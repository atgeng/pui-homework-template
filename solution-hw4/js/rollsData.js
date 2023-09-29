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
};

// Parse URL parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// extract roll information
function extractRoll() {
    let roll = rolls[rollType];
    let rollBasePrice = roll.basePrice;
    let rollImg = roll.imageFile;
    const headerElement = document.querySelector('#roll-name');
    headerElement.innerText = rollType + ' Cinnamon Roll';
    const imgElement = document.querySelector('#main-img');
    imgElement.src = '../assets/products/' + rollImg;
    const priceElement = document.querySelector('#priceId');
    priceElement.innerText = '$'+rollBasePrice;

}

// Price Update Trigger
let basePrice = rolls[rollType].basePrice;
let packPrice = 1;
let glazingPrice = 0;

// for glaze
function glazingChange(element) {
    //get value of selected glazing option
    glazingPrice = Number(element.value);
    //add code to update price
    totalPrice = Number((basePrice + glazingPrice)*packPrice).toFixed(2);
    document.getElementById('priceId').innerHTML = '$'+totalPrice;
}
// for pack size
function glazingChangePack(element) {
    //get value of selected glazing option
    packPrice = Number(element.value);
    //add code to update price
    totalPrice = Number((basePrice + glazingPrice)*packPrice).toFixed(2);
    document.getElementById('priceId').innerHTML = '$'+totalPrice;
}

window.onload = extractRoll();

// Cart Array
const cart = [];

// roll object
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// add to cart function
function addToCart() {
    let type = rollType;
    let selected1 = document.querySelector('#glazing');
    let glazing = selected1.options[selected1.selectedIndex].text;
    let selected2 = document.querySelector('#pack-size');
    let size = selected2.options[selected2.selectedIndex].text;
    let price = rolls[rollType].basePrice;
    let addRoll = new Roll(type, glazing, size, price);
    cart.push(addRoll);
    console.log(cart);
}
