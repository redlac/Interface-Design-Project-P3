function hClearUnshippedTable()
{
	let holder = document.getElementById("clearLastOne");
	holder.parentNode.removeChild(holder);
	//alert(holder);
}

function hShowPreviousOrder()
{
	let holder = document.getElementById("deleteFirstOne");
	holder.parentNode.removeChild(holder);
}

function hViewOrder()
{
	/*
	alert("#1000, Tomato, x1\n" + 
		"#1523, Ground Beef, x1\n" +
		"#18536, Beyond Meat, x2\n" +
		"#25269, Apricot Jam(1800), x1");
		*/
	var p = window.parent;
	p.btn.onclick();
}

function getDate(){
	n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
	d = n.getDate();
    document.getElementById("currentOrderDate").innerHTML = m + "/" + d + "/" + y;
}