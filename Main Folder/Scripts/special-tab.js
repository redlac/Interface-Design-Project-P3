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
        'description': "Testeroni",
        'stock': 26,
        'quantity': 0,
        'picUrl': "images/placeholder.png"
    },
    {
        'itemID': 6338,
        'itemName': "Ash Dust",
        'description': "Testeroni",
        'stock': 5,
        'quantity': 0,
        'picUrl': "images/placeholder.png"
    }
];

function populateStuff() {
    document.getElementById("searchOutput").className = "hi";
    document.getElementById("special-item-image-one").setAttribute("src", specialDatabase[0].picUrl)
    document.getElementById("special-item-desc-one").innerHTML = "<h4>" + specialDatabase[0].itemName + "</h4>" +
        "<p>Stock: " + specialDatabase[0].stock + "</p>" +
        "<p>" + specialDatabase[0].description + "</p>";



    document.getElementById("special-item-image-two").setAttribute("src", specialDatabase[1].picUrl);
    document.getElementById("special-item-desc-two").innerHTML = "<h4>" + specialDatabase[1].itemName + "</h4>" +
    "<p>Stock: " + specialDatabase[1].stock + "</p>" +
    "<p>" + specialDatabase[1].description + "</p>";
}

function specialAddToOrder(){
    document.getElementById("special-confirmation").className="hi";
    document.getElementById("special-placeOrder").className="hidden";
}
