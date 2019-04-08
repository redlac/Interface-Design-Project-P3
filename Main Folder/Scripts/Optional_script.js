var flag = true;
var check_box1, check_box2, check_box3;
var item_num, data_file;
const KEY = "item";
let myData = [],
    myIDs = [],
    myListData = [],
    myList = [];

window.onload = start;

function start() {
    //Retreive data from local storage
    const str = localStorage.getItem(KEY);
    if (str) {
        myListData = JSON.parse(str); //Converts
        console.log(myListData);
    }
    // displayItems();
}

// function displayItems() 
// {
//     //Get the html with tag/element with id = output
//     const myOut = document.querySelector("#order_list_result");
//     //Remove the duplicates OR clear the old output
//     myOut.innerHTML = "";
//     //Display
//     for(let obj of myListData) 
//     {
//         //Ceeate an element
//         const item = document.createElement("li");
//         item.innerText = obj.myStr; //output the data (each data)

//         //Create the delete button for each data
//         const btn = document.createElement("button");
//         btn.innerHTML = "Delete";
//         btn.value = "Delete";
//         //Set the attributes for button element
//         btn.setAttribute("onclick", `deleting(${obj.id})`);
//         btn.setAttribute("data-text", obj.myStr); //Custom data attribute data-text
//         btn.setAttribute("data-id", obj.id); //Custom data attribute data-id 
//         item.append(btn); //Add to the data output
//         console.log(obj);
//         myOut.append(obj);//Display every single data
//     }
// }

function database_array() {
    //Reseting array to empty array
    myData = [];
    for (var i = 0; i < regularDatabase.length; i++) {
        myData.push(regularDatabase[i]);
    }
    for (var i = 0; i < autoOrderDatabase.length; i++) {
        myData.push(autoOrderDatabase[i]);
    }
    console.log(myData);
}

function enabling() {
    if (document.getElementById("auto_add_item").checked == true) {
        document.getElementById("input_item").disabled = false;
        document.getElementById("search_item_num").disabled = false;
        document.getElementById("view_current_order").disabled = false;
    } else {
        document.getElementById("input_item").disabled = true;
        document.getElementById("search_item_num").disabled = true;
        document.getElementById("view_current_order").disabled = true;
    }
}

function getData() {
    if (document.getElementById("search_by_selection").value == "1") {
        item_num = document.getElementById("input_item").value;
        data_file = new database_array();
        const table_length = document.getElementById("table_output").rows.length;
        displayResult(table_length)
    }

}

function removing_item(id) {
    var row_num;
    for (var i = 0; i < myIDs.length; i++) {
        if (id == myIDs[i]) {
            row_num = (i + 1);
        }
    }
    document.getElementById("table_output").deleteRow(row_num);
    myIDs.splice((row_num - 1), 1);
}

function adding_item(id) {
    var list_output = document.getElementById("order_list_result");
    for (var i = 0; i < myData.length; i++) {
        if (myData[i].itemID == id) {
            myListData.push(myData[i]);
            console.log(myData[i]);
            var id_item = id;
            var name_item = myData[i].itemName;
            var stock_item = myData[i].stock;
            var quantity_item = document.getElementById(name_item).value;
            console.log(id_item, name_item, stock_item, quantity_item);
            var text = id_item + ", " + name_item + ", stock: " + stock_item + ", quantity: " + quantity_item;
            console.log(text)
            var listItem = document.createElement("li");
            listItem.append(text);
            var removeButton = document.createElement("button");
            removeButton.innerHTML = "Remove";
            removeButton.setAttribute("id", name_item);
            removeButton.setAttribute("onclick", `removingItemList(${name_item});`);

            listItem.append(removeButton);
            list_output.append(listItem);
            saveToStorage();
        }
    }
}

function saveToStorage() {
    // save our GLOBAL ARRAY to localstorage
    localStorage.setItem(KEY, JSON.stringify(myListData));
    // save our GLOBAL ARRAY to sessionStorage
    sessionStorage.setItem(KEY, JSON.stringify(myListData));
}

function plus_quantity(name) {
    console.log("check 1");
    var str = name;
    console.log("check 1", name, str);
    var current_value = document.getElementById(name).value;
    var updated_value = Number(current_value) + 1;
    console.log("check 1", current_value, updated_value);
    document.getElementById(str).value = updated_value;
}

function minus_quantity(val) {

    var str = val.toString();
    console.log("check 2", val, str);
    var current_value = document.getElementById(str).value;
    var updated_value = Number(current_value) - 1;
    if (updated_value < 0) {
        updated_value = 0;
    }
    console.log("check 3", current_value, updated_value);
    document.getElementById(val).value = updated_value;
}

function displayResult(length) {
    var flag = true;
    const myTable = document.querySelector("#table_output");
    const table_length = length;
    console.log(myTable);
    console.log(flag, table_length);
    document.getElementById("div_output").style.display = "block";
    for (var i = 0; i < myIDs.length; i++) {
        if (item_num == myIDs[i]) {
            flag = false;
        }
    }
    console.log(flag);
    for (let obj of myData) {
        console.log(flag);
        if (obj.itemID == parseInt(item_num) && flag) {
            myIDs.push(obj.itemID);
            var product_name = JSON.stringify(obj.itemName);
            console.log(product_name);
            var image = document.createElement("img");
            image.setAttribute("src", obj.picUrl);

            var input_number = document.createElement("input");
            input_number.setAttribute("type", "text");
            input_number.setAttribute("id", obj.itemName.toString());
            input_number.setAttribute("class", "input_number_field");
            input_number.setAttribute("value", "1");

            var plus_button = document.createElement("button");
            plus_button.innerHTML = "+";
            plus_button.setAttribute("id", "plus_button");
            plus_button.setAttribute("value", "+");
            plus_button.setAttribute("onclick", `plus_quantity(${product_name});`);
            var minus_button = document.createElement("button");
            minus_button.innerHTML = "-";
            minus_button.setAttribute("value", "s");
            minus_button.setAttribute("onclick", `minus_quantity(${product_name});`);

            // var update_button = document.createElement("button");
            // update_button.innerHTML = "Update";
            // update_button.setAttribute("onclick", `updating_item(${obj.itemID});`);
            var remove_button = document.createElement("button");
            remove_button.innerHTML = "Remove";
            remove_button.setAttribute("onclick", `removing_item(${obj.itemID});`);
            var add_button = document.createElement("button");
            add_button.innerHTML = "Add";
            add_button.setAttribute("onclick", `adding_item(${obj.itemID});`);
            //Rows
            var row = myTable.insertRow(table_length);
            row.setAttribute("id", "row_out_put");

            var item_id = row.insertCell(0);
            item_id.innerHTML = parseInt(obj.itemID).toString();

            var item_name = row.insertCell(1);
            item_name.append(image);

            var item_description = row.insertCell(2);
            item_description.innerHTML = obj.itemName + "\n<br>" + obj.description;

            var item_stock = row.insertCell(3);
            item_stock.innerHTML = parseInt(obj.stock).toString();

            var item_quantity = row.insertCell(4);
            item_quantity.append(minus_button);
            item_quantity.append(input_number);
            item_quantity.append(plus_button);

            var update_remove = row.insertCell(5);
            update_remove.append(add_button);
            update_remove.append(remove_button);

            //document.getElementById("output_result").innerHTML = parseInt(obj.itemID).toString() + " at Index: " + myData.indexOf(obj) + " and ranked at positon: " + (myData.indexOf(obj) + 1);
            console.log(parseInt(obj.itemID).toString() + " at Index: " + myData.indexOf(obj) + " and ranked at positon: " + (myData.indexOf(obj) + 1));
        }
    }
}

function saveButton() {
    alert("All items saved to automatic order list.");
}