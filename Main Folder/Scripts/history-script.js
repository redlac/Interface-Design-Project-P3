function hClearUnshippedTable() {
	let holder = document.getElementById("clearLastOne");
	holder.parentNode.removeChild(holder);
	holder = window.parent;
	holder = holder.list;
	holder.innerHTML = "";
	//alert(holder);
}

function hShowPreviousOrder() {
	let holder = document.getElementById("deleteFirstOne");
	holder.parentNode.removeChild(holder);
}

function hViewOrder() {
	/*
	alert("#1000, Tomato, x1\n" + 
		"#1523, Ground Beef, x1\n" +
		"#18536, Beyond Meat, x2\n" +
		"#25269, Apricot Jam(1800), x1");
		*/
		
		
		holder = window.parent.list;
		
		holder.innerHTML = "";
		
		let row = document.createElement("tr");
		holder.appendChild(row);
		
		let cell = document.createElement("th");
		cell.innerHTML = "Product ID";
		
		row.appendChild(cell);
		
		cell = document.createElement("th");
		cell.innerHTML = "Product";
		
		row.appendChild(cell);
		
		cell = document.createElement("th");
		cell.innerHTML = "Description";
		
		row.appendChild(cell);
		
		cell = document.createElement("th");
		cell.innerHTML = "Stock";
		
		row.appendChild(cell);
		
		cell = document.createElement("th");
		cell.innerHTML = "Quantity";
		
		row.appendChild(cell);
		
		cell = document.createElement("th");
		cell.innerHTML = "Price";
		
		row.appendChild(cell);
		
		
		
		//Creating first row
		row = document.createElement("tr");
		holder.appendChild(row);
		
		cell = document.createElement("td");
		cell.innerHTML = "1005";
		row.appendChild(cell);
		
		cell = document.createElement("td");
		let imaged = document.createElement("img");
		imaged.setAttribute("src", "images/chicken_breast_tenderloin.jpg");
		row.appendChild(cell);
		cell.appendChild(imaged);
		
		cell = document.createElement("td");
		cell.innerHTML = "Chicken Breast<br>4KG skinless/boneless";
		row.appendChild(cell);
		
		cell = document.createElement("td");
		cell.innerHTML = "11";
		row.appendChild(cell);
		
		cell = document.createElement("td");
		cell.innerHTML = "5";
		row.appendChild(cell);
		
		cell = document.createElement("td");
		cell.innerHTML = "3.19";
		row.appendChild(cell);
		
		
		//Creating second row
		row = document.createElement("tr");
		holder.appendChild(row);
		
		cell = document.createElement("td");
		cell.innerHTML = "<strong>TOTAL:</strong>";
		row.appendChild(cell);
		
		cell = document.createElement("td");
		cell.innerHTML = "";
		row.appendChild(cell);
		
		cell = document.createElement("td");
		cell.innerHTML = "";
		row.appendChild(cell);
		
		cell = document.createElement("td");
		cell.innerHTML = "";
		row.appendChild(cell);
		
		cell = document.createElement("td");
		cell.innerHTML = "5";
		row.appendChild(cell);
		
		cell = document.createElement("td");
		cell.innerHTML = "15.95";
		row.appendChild(cell);
		
		
		
		holder = window.parent.currentOrder;
		holder.innerHTML = "Order for March 12th";
		
		
	var p = window.parent;
	p.btn.onclick();
}

function getDate() {
	n = new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();
	document.getElementById("currentOrderDate").innerHTML = m + "/" + d + "/" + y;
}