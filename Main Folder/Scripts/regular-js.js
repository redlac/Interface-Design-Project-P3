/**
 * Functions for setting the quantity on items when the plus and minus buttons are clicked.
 */
function regularGridMinusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-GridQty" + itemNumber).value);
    if (itemQty > 0) {
        itemQty -= 1;
        document.getElementById("regular-GridQty" + itemNumber).value = itemQty;
    }
}

function regularGridPlusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-GridQty" + itemNumber).value);
    itemQty += 1;
    document.getElementById("regular-GridQty" + itemNumber).value = itemQty;
}

function regularListMinusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-ListQty" + itemNumber).value);
    if (itemQty > 0) {
        itemQty -= 1;
        document.getElementById("regular-ListQty" + itemNumber).value = itemQty;
    }
}

function regularListPlusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-ListQty" + itemNumber).value);
    itemQty += 1;
    document.getElementById("regular-ListQty" + itemNumber).value = itemQty;
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

document.getElementById("regular-item-desc1").innerHTML = "<span>" + regularDatabase[0].itemName + "</span>"
                                                        + "<p>Stock: " + regularDatabase[0].stock + "</p>"
                                                        + "<p>" + regularDatabase[0].description + "</p>";

document.getElementById("regular-item-desc2").innerHTML = "<span>" + regularDatabase[1].itemName + "</span>"
                                                        + "<p>Stock: " + regularDatabase[1].stock + "</p>"
                                                        + "<p>" + regularDatabase[1].description + "</p>";

document.getElementById("regular-item-desc3").innerHTML = "<span>" + regularDatabase[1].itemName + "</span>"
                                                        + "<p>Stock: " + regularDatabase[1].stock + "</p>"
                                                        + "<p>" + regularDatabase[1].description + "</p>";

document.getElementById("regular-grid-item-desc1").innerHTML = "<span>" + regularDatabase[0].itemName + "</span>"; 
document.getElementById("regular-grid-item-desc2").innerHTML = "<span>" + regularDatabase[1].itemName + "</span>"; 
document.getElementById("regular-grid-item-desc3").innerHTML = "<span>" + regularDatabase[2].itemName + "</span>"; 