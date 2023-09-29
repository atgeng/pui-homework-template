// Price adaptations (objects)
const priceAdaptsGlazing = {
    keepOriginal: {name: "Keep original", priceAdaption: 0},
    sugarMilk: {name: "Sugar milk", priceAdaption: 0},
    vanillaMilk: {name: "Vanilla milk", priceAdaption: 0.5},
    doubleChocolate: {name: "Double chocolate", priceAdaption: 1.5}
}

const priceAdaptsPack = {
    packSize1: {priceAdaption: 1, name: 1},
    packSize3: {priceAdaption: 3, name: 3},
    packSize6: {priceAdaption: 5, name: 6},
    packSize12: {priceAdaption: 10, name: 12}
}

// Populate glaze dropdown // source: https://electrictoolbox.com/javascript-add-options-html-select/
function makeDropdown() {
    var select = document.getElementById("glazing");
    for (var key in priceAdaptsGlazing) {
        if (priceAdaptsGlazing.hasOwnProperty(key)) {
            let opt = new Option(priceAdaptsGlazing[key].name, priceAdaptsGlazing[key].priceAdaption);
            select.add(opt);
        }
    }
}
window.onload=makeDropdown();

// Populate pack size dropdown
function makeDropdownPack() {
    var select = document.getElementById("pack-size");
        for (var key in priceAdaptsPack) {
            if (priceAdaptsPack.hasOwnProperty(key)) {
                let opt = new Option(priceAdaptsPack[key].name, priceAdaptsPack[key].priceAdaption);
                select.add(opt);
            }
        }
}

window.onload=makeDropdownPack();


