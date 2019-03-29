function specialGridMinusQty(itemNumber) {
    itemQty = Number(document.getElementById("special-GridQty" + itemNumber).value);
    if (itemQty > 0) {
        itemQty -= 1;
        document.getElementById("special-GridQty" + itemNumber).value = itemQty;
    }
}

function specialGridPlusQty(itemNumber) {
    itemQty = Number(document.getElementById("special-GridQty" + itemNumber).value);
    itemQty += 1;
    document.getElementById("special-GridQty" + itemNumber).value = itemQty;
}

function specialListMinusQty(itemNumber) {
    itemQty = Number(document.getElementById("special-ListQty" + itemNumber).value);
    if (itemQty > 0) {
        itemQty -= 1;
        document.getElementById("special-ListQty" + itemNumber).value = itemQty;
    }
}

function specialListPlusQty(itemNumber) {
    itemQty = Number(document.getElementById("special-ListQty" + itemNumber).value);
    itemQty += 1;
    document.getElementById("special-ListQty" + itemNumber).value = itemQty;
}

const specialDatabase = [{
        'itemID': 6327,
        'itemName': "Ash Brick",
        'description': "Weight:3kg<br>Height:2 inches<br>Length:8 inches",
        'stock': 26,
        'quantity': 0,
        'picUrl': "images/AshBrick.jpg",
        'reference':"https://www.justdial.com/Vijayawada/SRI-DURGA-Bhavani-Flyash-Bricks-MYLAVARAM-Ibrahimpatnam/0866PX866-X866-180117200512-Z4H6_BZDET/photos"
    },
];

function populateStuff() {
    document.getElementById("searchOutput").className = "hi";
    document.getElementById("special-item-image-one").setAttribute("src", specialDatabase[0].picUrl)
    document.getElementById("special-item-desc-one").innerHTML = "<h4>" + specialDatabase[0].itemName + "</h4>" +
        "<p>Stock: " + specialDatabase[0].stock + "</p>" +
        "<p>" + specialDatabase[0].description + "</p>";
}

function specialAddToOrder(){
    document.getElementById("special-confirmation").className="hi";
    document.getElementById("special-placeOrder").className="hidden";
}
