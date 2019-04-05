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


function populateStuff() {
    document.getElementById("searchOutput").className = "hi";
    document.getElementById("special-item-image-one").setAttribute("src", regularDatabase[6].picUrl); document.getElementById("special-item-desc-one").innerHTML = "<h4>" + regularDatabase[6].itemName + "</h4>" + "<p>Product ID: " + regularDatabase[6].itemID + "</p>" + "<p>Price: $" + regularDatabase[6].Price + "</p>" + "<p>Stock: " + regularDatabase[6].stock + "</p>" +
           "<p>" + regularDatabase[6].description + "</p>";
}

function specialAddToOrder() {
    document.getElementById("special-confirmation").className = "hi";
    document.getElementById("special-placeOrder").className = "hidden";
}