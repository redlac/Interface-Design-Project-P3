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