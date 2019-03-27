/**
 * Functions for setting the quantity on items when the plus and minus buttons are clicked.
 */
function regularGridMinusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-GridQty" + itemNumber).value);
    if (itemQty > 0) {
        itemQty -= 1;
        document.getElementById("regular-GridQty" + itemNumber).value = itemQty;
    }
    regularDatabase[itemNumber-1].quantity = itemQty;
    console.log(regularDatabase);
}

function regularGridPlusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-GridQty" + itemNumber).value);
    itemQty += 1;
    document.getElementById("regular-GridQty" + itemNumber).value = itemQty;
    regularDatabase[itemNumber-1].quantity = itemQty;
    console.log(regularDatabase);
}

function regularListMinusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-ListQty" + itemNumber).value);
    if (itemQty > 0) {
        itemQty -= 1;
        document.getElementById("regular-ListQty" + itemNumber).value = itemQty;
    }
    regularDatabase[itemNumber-1].quantity= itemQty;
    console.log(regularDatabase);
}

function regularListPlusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-ListQty" + itemNumber).value);
    itemQty += 1;
    document.getElementById("regular-ListQty" + itemNumber).value = itemQty;
    regularDatabase[itemNumber-1].quantity = itemQty;
    console.log(regularDatabase);
}

/**
 * Function that listens for the selection change from list to grid view.
 */
document.getElementById("regular-view").onchange = function () {
    let viewType = document.getElementById("regular-view").value;
    if (viewType == "Grid View") {
        document.getElementById("regular-itemList").style.display = "none";
        document.getElementById("regular-itemGrid").style.display = "flex";
    }

    if (viewType == "List View") {
        document.getElementById("regular-itemList").style.display = "block";
        document.getElementById("regular-itemGrid").style.display = "none";
    }
}

document.getElementById("regular-item-desc1").innerHTML = "<h4>" + regularDatabase[0].itemName + "</h4>"
                                                        + "<p>Stock: " + regularDatabase[0].stock + "</p>"
                                                        + "<p>" + regularDatabase[0].description + "</p>";

document.getElementById("regular-item-desc2").innerHTML = "<h4>" + regularDatabase[1].itemName + "</h4>"
                                                        + "<p>Stock: " + regularDatabase[1].stock + "</p>"
                                                        + "<p>" + regularDatabase[1].description + "</p>";

document.getElementById("regular-item-desc3").innerHTML = "<h4>" + regularDatabase[2].itemName + "</h4>"
                                                        + "<p>Stock: " + regularDatabase[2].stock + "</p>"
                                                        + "<p>" + regularDatabase[2].description + "</p>";

document.getElementById("regular-item-desc4").innerHTML = "<h4>" + regularDatabase[3].itemName + "</h4>"
                                                        + "<p>Stock: " + regularDatabase[3].stock + "</p>"
                                                        + "<p>" + regularDatabase[3].description + "</p>";

document.getElementById("regular-item-desc5").innerHTML = "<h4>" + regularDatabase[4].itemName + "</h4>"
                                                        + "<p>Stock: " + regularDatabase[4].stock + "</p>"
                                                        + "<p>" + regularDatabase[4].description + "</p>";

document.getElementById("regular-item-desc6").innerHTML = "<h4>" + regularDatabase[5].itemName + "</h4>"
                                                        + "<p>Stock: " + regularDatabase[5].stock + "</p>"
                                                        + "<p>" + regularDatabase[5].description + "</p>";

document.getElementById("regular-grid-item-desc1").innerHTML = "<h4>" + regularDatabase[0].itemName + "</h4>"; 
document.getElementById("regular-grid-item-desc2").innerHTML = "<h4>" + regularDatabase[1].itemName + "</h4>"; 
document.getElementById("regular-grid-item-desc3").innerHTML = "<h4>" + regularDatabase[2].itemName + "</h4>"; 
document.getElementById("regular-grid-item-desc4").innerHTML = "<h4>" + regularDatabase[3].itemName + "</h4>"; 
document.getElementById("regular-grid-item-desc5").innerHTML = "<h4>" + regularDatabase[4].itemName + "</h4>"; 
document.getElementById("regular-grid-item-desc6").innerHTML = "<h4>" + regularDatabase[5].itemName + "</h4>"; 

document.getElementById("regular-stock1").innerHTML = "Stock: " + regularDatabase[0].stock;
document.getElementById("regular-stock2").innerHTML = "Stock: " + regularDatabase[1].stock;
document.getElementById("regular-stock3").innerHTML = "Stock: " + regularDatabase[2].stock;
document.getElementById("regular-stock4").innerHTML = "Stock: " + regularDatabase[3].stock;
document.getElementById("regular-stock5").innerHTML = "Stock: " + regularDatabase[4].stock;
document.getElementById("regular-stock6").innerHTML = "Stock: " + regularDatabase[5].stock;

function placeOrder(){
    document.getElementById("regular-placeOrder").style.display = "none";
    document.getElementById("confirm-popup").style.display = "block";
}