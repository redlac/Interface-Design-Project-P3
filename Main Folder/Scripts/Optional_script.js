var flag = true;
var check_box1, check_box2, check_box3;
var item_num;
const myData = [];

function database_array() 
{
    for(var i = 0; i < regularDatabase.length; i++) 
    {
        myData.push(regularDatabase[i]);
    }
    for(var i = 0; i < specialDatabase.length; i++) 
    {
        myData.push(specialDatabase[i]);
    }
    console.log(myData);

}

function displayResult() {
    if (flag) {
        document.getElementById("div_output").style.display = "block";
        flag = false;
    } else {
        document.getElementById("div_output").style.display = "none";
        flag = true;
    }
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
    const data_file = new database_array();
    console.log(item_num);
    console.log(myData);

    for(let obj of myData) 
    {
        if(obj.itemID == parseInt(item_num)) 
        {
            document.getElementById("output_result").innerHTML = parseInt(obj.itemID).toString() + " at Index: " + myData.indexOf(obj) + " and ranked at positon: " + (myData.indexOf(obj) + 1);
            console.log(parseInt(obj.itemID).toString() + " at Index: " + myData.indexOf(obj) + " and ranked at positon: " + (myData.indexOf(obj) + 1));
        }
    }


}

