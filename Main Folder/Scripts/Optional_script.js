var flag = true;
var check_box1, check_box2, check_box3;
var item_num;

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
    console.log(item_num);
    console.log(regularDatabase[1].itemID.toString());
}