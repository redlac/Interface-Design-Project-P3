var flag = true;
var check_box1, check_box2, check_box3;
var item_num;
let myData = [];

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

function displayResult() {
    // if (flag) {
        document.getElementById("div_output").style.display = "block";
        getData();
    //     flag = false;
    // } else {
    //     document.getElementById("div_output").style.display = "none";
    //     flag = true;
    // }
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
    var data_file = new database_array();
    console.log(item_num);
    console.log(myData);
    const myTable = document.querySelector("#table_output");
    const table_length = document.getElementById("table_output").rows.length;
    console.log(table_length);

    for(let obj of myData) 
    {
        if(obj.itemID == parseInt(item_num)) 
        {
            var image = document.createElement("img");
            image.setAttribute("src", obj.picUrl);
            
            var row = myTable.insertRow(table_length);
            var item_id = row.insertCell(0);
            item_id.innerHTML = parseInt(obj.itemID).toString();
            var item_name = row.insertCell(1);
            item_name.append(image);
            var item_description = row.insertCell(2);
            item_description.innerHTML = obj.itemName + "\n<br>" + obj.description;

            document.getElementById("output_result").innerHTML = parseInt(obj.itemID).toString() + " at Index: " + myData.indexOf(obj) + " and ranked at positon: " + (myData.indexOf(obj) + 1);
            console.log(parseInt(obj.itemID).toString() + " at Index: " + myData.indexOf(obj) + " and ranked at positon: " + (myData.indexOf(obj) + 1));
        }
    }
}

