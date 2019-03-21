function regularMinusQty(itemNumber){
    itemQty = Number(document.getElementById("regular-GridQty" + itemNumber).value);
    if (itemQty > 0)
    {
        itemQty -= 1;
        document.getElementById("regular-GridQty" + itemNumber).value = itemQty;
    }
}

function regularPlusQty(itemNumber){
    itemQty = Number(document.getElementById("regular-GridQty" + itemNumber).value);
    itemQty += 1;
    document.getElementById("regular-GridQty" + itemNumber).value = itemQty;
}