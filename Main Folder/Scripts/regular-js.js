document.getElementById("order-sent").style.display = "none";

/**
 * Functions for setting the quantity on items when the plus and minus buttons are clicked.
 */
function regularGridMinusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-GridQty" + itemNumber).value);
    if (itemQty > 0) {
        itemQty -= 1;
        document.getElementById("regular-GridQty" + itemNumber).value = itemQty;
    }
    regularDatabase[itemNumber - 1].quantity = itemQty;
}

function regularGridPlusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-GridQty" + itemNumber).value);
    itemQty += 1;
    document.getElementById("regular-GridQty" + itemNumber).value = itemQty;
    regularDatabase[itemNumber - 1].quantity = itemQty;
}

function regularListMinusQty(itemNumber) {
    itemQty = Number(document.getElementById("regular-ListQty" + itemNumber).value);
    if (itemQty > 0) {
        itemQty -= 1;
        document.getElementById("regular-ListQty" + itemNumber).value = itemQty;
    }
    regularDatabase[itemNumber - 1].quantity = itemQty;
}

function regularListPlusQty(itemNumber) {
    console.log("plus");
    itemQty = Number(document.getElementById("regular-ListQty" + itemNumber).value);
    itemQty += 1;
    document.getElementById("regular-ListQty" + itemNumber).value = itemQty;
    regularDatabase[itemNumber - 1].quantity = itemQty;
    console.log(regularDatabase[itemNumber - 1].quantity);
}

/**
 * Function that listens for the selection change from list to grid view.
 */
if (document.getElementById("regular-view") !== null) {
    document.getElementById("regular-view").onchange = function () {
        let viewType = document.getElementById("regular-view").value;
        if (viewType == "Grid View") {
            document.getElementById("regular-view").style.marginBottom = "41px";
            document.getElementById("regular-itemList-header").style.display = "none";
            document.getElementById("regular-itemList").style.display = "none";
            document.getElementById("regular-itemGrid").style.display = "flex";
        }

        if (viewType == "List View") {
            document.getElementById("regular-view").style.marginBottom = "2vw";
            document.getElementById("regular-itemList-header").style.display = "block";
            document.getElementById("regular-itemList").style.display = "block";
            document.getElementById("regular-itemGrid").style.display = "none";
        }
    }
}

if (document.getElementById("regular-itemList") !== null) {
    document.getElementById("regular-item-desc1").innerHTML = "<h4>" + regularDatabase[0].itemID + "</h4>" + "<h4>" +  regularDatabase[0].itemName + "</h4>" +"<p>" + 
    regularDatabase[0].description + "</p>" + "<p>Stock: " + regularDatabase[0].stock + "</p>";
        
    document.getElementById("regular-item-desc2").innerHTML = "<h4>" + regularDatabase[1].itemID + "</h4>" + "<h4>" + regularDatabase[1].itemName + "</h4>" +"<p>" + 
    regularDatabase[1].description + "</p>" + "<p>Stock: " + regularDatabase[1].stock + "</p>";

    document.getElementById("regular-item-desc3").innerHTML = "<h4>" + regularDatabase[2].itemID + "</h4>" + "<h4>" + regularDatabase[2].itemName + "</h4>" +"<p>" + 
    regularDatabase[2].description + "</p>" + "<p>Stock: " + regularDatabase[2].stock + "</p>";

    document.getElementById("regular-item-desc4").innerHTML = "<h4>" + regularDatabase[3].itemID + "</h4>" + "<h4>" + regularDatabase[3].itemName + "</h4>" +"<p>" + 
    regularDatabase[3].description + "</p>" + "<p>Stock: " + regularDatabase[3].stock + "</p>";
    
    document.getElementById("regular-item-desc5").innerHTML = "<h4>" + regularDatabase[4].itemID + "</h4>" + "<h4>" + regularDatabase[4].itemName + "</h4>" +"<p>" + 
    regularDatabase[4].description + "</p>" + "<p>Stock: " + regularDatabase[4].stock + "</p>";

    document.getElementById("regular-item-desc6").innerHTML = "<h4>" + regularDatabase[5].itemID + "</h4>" + "<h4>" + regularDatabase[5].itemName + "</h4>" +"<p>" + 
    regularDatabase[5].description + "</p>" + "<p>Stock: " + regularDatabase[5].stock + "</p>";

    document.getElementById("regular-item-desc7").innerHTML = "<h4>" + regularDatabase[6].itemID + "</h4>" + "<h4>" + regularDatabase[6].itemName + "</h4>" +"<p>" + 
    regularDatabase[6].description + "</p>" + "<p>Stock: " + regularDatabase[6].stock + "</p>";
    
    document.getElementById("regular-item-desc8").innerHTML = "<h4>" + regularDatabase[7].itemID + "</h4>" + "<h4>" + regularDatabase[7].itemName + "</h4>" +"<p>" + 
    regularDatabase[7].description + "</p>" + "<p>Stock: " + regularDatabase[7].stock + "</p>";

    document.getElementById("regular-item-desc9").innerHTML = "<h4>" + regularDatabase[8].itemID + "</h4>" + "<h4>" + regularDatabase[8].itemName + "</h4>" +"<p>" + 
    regularDatabase[8].description + "</p>" + "<p>Stock: " + regularDatabase[8].stock + "</p>";

    document.getElementById("regular-item-desc10").innerHTML = "<h4>" + regularDatabase[9].itemID + "</h4>" + "<h4>" + regularDatabase[9].itemName + "</h4>" +"<p>" + 
    regularDatabase[9].description + "</p>" + "<p>Stock: " + regularDatabase[9].stock + "</p>";
    
    document.getElementById("regular-item-desc11").innerHTML = "<h4>" + regularDatabase[10].itemID + "</h4>" + "<h4>" + regularDatabase[10].itemName + "</h4>" +"<p>" + 
    regularDatabase[10].description + "</p>" + "<p>Stock: " + regularDatabase[10].stock + "</p>";

    document.getElementById("regular-grid-item-desc1").innerHTML = "<h4>" + regularDatabase[0].itemName + "</h4>";
    document.getElementById("regular-grid-item-desc2").innerHTML = "<h4>" + regularDatabase[1].itemName + "</h4>";
    document.getElementById("regular-grid-item-desc3").innerHTML = "<h4>" + regularDatabase[2].itemName + "</h4>";
    document.getElementById("regular-grid-item-desc4").innerHTML = "<h4>" + regularDatabase[3].itemName + "</h4>";
    document.getElementById("regular-grid-item-desc5").innerHTML = "<h4>" + regularDatabase[4].itemName + "</h4>";
    document.getElementById("regular-grid-item-desc6").innerHTML = "<h4>" + regularDatabase[5].itemName + "</h4>";
    document.getElementById("regular-grid-item-desc7").innerHTML = "<h4>" + regularDatabase[6].itemName + "</h4>";
    document.getElementById("regular-grid-item-desc8").innerHTML = "<h4>" + regularDatabase[7].itemName + "</h4>";
    document.getElementById("regular-grid-item-desc9").innerHTML = "<h4>" + regularDatabase[8].itemName + "</h4>";
    document.getElementById("regular-grid-item-desc10").innerHTML = "<h4>" + regularDatabase[9].itemName + "</h4>";
    document.getElementById("regular-grid-item-desc11").innerHTML = "<h4>" + regularDatabase[10].itemName + "</h4>";

    document.getElementById("regular-stock1").innerHTML = "Stock: " + regularDatabase[0].stock;
    document.getElementById("regular-stock2").innerHTML = "Stock: " + regularDatabase[1].stock;
    document.getElementById("regular-stock3").innerHTML = "Stock: " + regularDatabase[2].stock;
    document.getElementById("regular-stock4").innerHTML = "Stock: " + regularDatabase[3].stock;
    document.getElementById("regular-stock5").innerHTML = "Stock: " + regularDatabase[4].stock;
    document.getElementById("regular-stock6").innerHTML = "Stock: " + regularDatabase[5].stock;
    document.getElementById("regular-stock7").innerHTML = "Stock: " + regularDatabase[6].stock;
    document.getElementById("regular-stock8").innerHTML = "Stock: " + regularDatabase[7].stock;
    document.getElementById("regular-stock9").innerHTML = "Stock: " + regularDatabase[8].stock;
    document.getElementById("regular-stock10").innerHTML = "Stock: " + regularDatabase[9].stock;
    document.getElementById("regular-stock11").innerHTML = "Stock: " + regularDatabase[10].stock;
    
    document.getElementById("regular-price1").innerHTML = "Price: $" + regularDatabase[0].Price;
    document.getElementById("regular-price2").innerHTML = "Price: $" + regularDatabase[1].Price;
    document.getElementById("regular-price3").innerHTML = "Price: $" + regularDatabase[2].Price;
    document.getElementById("regular-price4").innerHTML = "Price: $" + regularDatabase[3].Price;
    document.getElementById("regular-price5").innerHTML = "Price: $" + regularDatabase[4].Price;
    document.getElementById("regular-price6").innerHTML = "Price: $" + regularDatabase[5].Price;
    document.getElementById("regular-price7").innerHTML = "Price: $" + regularDatabase[6].Price;
    document.getElementById("regular-price8").innerHTML = "Price: $" + regularDatabase[7].Price;
    document.getElementById("regular-price9").innerHTML = "Price: $" + regularDatabase[8].Price;
    document.getElementById("regular-price10").innerHTML = "Price: $" + regularDatabase[9].Price;
    document.getElementById("regular-price11").innerHTML = "Price: $" + regularDatabase[10].Price;
    
    document.getElementById("grid-price1").innerHTML = "Price: $" + regularDatabase[0].Price;
    document.getElementById("grid-price2").innerHTML = "Price: $" + regularDatabase[1].Price;
    document.getElementById("grid-price3").innerHTML = "Price: $" + regularDatabase[2].Price;
    document.getElementById("grid-price4").innerHTML = "Price: $" + regularDatabase[3].Price;
    document.getElementById("grid-price5").innerHTML = "Price: $" + regularDatabase[4].Price;
    document.getElementById("grid-price6").innerHTML = "Price: $" + regularDatabase[5].Price;
    document.getElementById("grid-price7").innerHTML = "Price: $" + regularDatabase[6].Price;
    document.getElementById("grid-price8").innerHTML = "Price: $" + regularDatabase[7].Price;
    document.getElementById("grid-price9").innerHTML = "Price: $" + regularDatabase[8].Price;
    document.getElementById("grid-price10").innerHTML = "Price: $" + regularDatabase[9].Price;
    document.getElementById("grid-price11").innerHTML = "Price: $" + regularDatabase[10].Price;
}else{console.log("is null");}

function placeOrder() {
    document.getElementById("regular-placeOrder").style.visibility= "hidden";
    document.getElementById("confirm-popup").style.visibility= "visible";
}

function sendOrder(){
    document.getElementById("order-sent").style.display = "block";
    document.getElementById("confirm-popup").style.display = "none";
}

function cancelOrder(){
    document.getElementById("confirm-popup").style.visibility= "hidden";
    document.getElementById("order-sent").style.display = "none";
    document.getElementById("regular-placeOrder").style.display = "block";
    document.getElementById("regular-placeOrder").style.visibility= "visible";
}

function getDate() {
	var p = window.parent;
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    p.document.getElementById("header-currentDate").innerHTML = m + "/" + d + "/" + y;
}