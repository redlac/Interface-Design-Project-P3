var flag = true;
var check_box1, check_box2, check_box3;
var item_num, data_file;
let myData = [], myIDs = [];

function database_array() 
{
    //Reseting array to empty array
    myData = [];
    for(var i = 0; i < regularDatabase.length; i++) 
    {
        myData.push(regularDatabase[i]);
    }
    for(var i = 0; i < autoOrderDatabase.length; i++) 
    {
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

function getData() 
{
    item_num = document.getElementById("input_item").value;
    data_file = new database_array();
    const table_length = document.getElementById("table_output").rows.length;
    displayResult(table_length)
}

function removing_item(id) 
{
    for(var i = 0; i < myIDs.length; i++) 
    {
        if(id == myIDs[i]) 
        {
            myIDs.slice(myIDs[i], 1);
        }
    }
    displayResult(0);
}

function displayResult(length) {
    var flag = true;
    const myTable = document.querySelector("#table_output");
    const table_length = length;
    console.log(myTable);
    console.log(flag, table_length);
    document.getElementById("div_output").style.display = "block";
    for(var i = 0; i < myIDs.length; i++) 
    {
        if(item_num == myIDs[i]) 
        {
            flag = false;
        }
    }
    console.log(flag);
    for(let obj of myData) 
    {   
        console.log(flag);
        if(obj.itemID == parseInt(item_num) && flag) 
        {   
            myIDs.push(obj.itemID);

            var image = document.createElement("img");
            image.setAttribute("src", obj.picUrl);
            
            var input_number = document.createElement("input");
            input_number.setAttribute("type", "text");
            input_number.setAttribute("id", "input_number_field");

            var plus_button = document.createElement("button");
            plus_button.innerHTML = "+";
            plus_button.setAttribute("value", "+");
            plus_button.setAttribute("onclick", `plus_quantity();`);
            var minus_button = document.createElement("button");
            minus_button.innerHTML = "-";
            minus_button.setAttribute("value", "s");
            minus_button.setAttribute("onclick", `minus_quantity();`);

            var update_button = document.createElement("button");
            update_button.innerHTML = "Update";
            update_button.setAttribute("onclick", `updating_item(${obj.itemID});`);
            var remove_button = document.createElement("button");
            remove_button.innerHTML = "Remove";
            remove_button.setAttribute("onclick", `removing_item(${obj.itemID});`);
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
            item_quantity.append(input_number);
            item_quantity.append(plus_button);
            item_quantity.append(minus_button);

            var update_remove = row.insertCell(5);
            update_remove.append(update_button);
            update_remove.append(remove_button);
            
            document.getElementById("output_result").innerHTML = parseInt(obj.itemID).toString() + " at Index: " + myData.indexOf(obj) + " and ranked at positon: " + (myData.indexOf(obj) + 1);
            console.log(parseInt(obj.itemID).toString() + " at Index: " + myData.indexOf(obj) + " and ranked at positon: " + (myData.indexOf(obj) + 1));
        }
    }
}