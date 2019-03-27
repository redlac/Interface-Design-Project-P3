/**
 * NOTE
 * If picture doesn't show up,
 * you may want to remove " ../ " out of the picUrl
 * I did it and it worked.
 */

const regularDatabase = 
[
	{
		'itemID' : 1000,
		'itemName' : "Tomato",
		'description' : "Vine ripe tomatoes.",
		'stock' : 78,
		'quantity' : 0,
		'picUrl' : "images/close-up-delicious-farming-1447297.jpg"
	},
	{
		'itemID' : 1001,
		'itemName' : "Banana",
		'description' : "Yellow ripened.",
		'stock' : 1573,
		'quantity' : 0,
		'picUrl' : "images/bananas-bunch-food-41957.jpg"
	},
	{
		'itemID' : 1002,
		'itemName' : "Cucumber",
		'description' : "Fresh picked.",
		'stock' : 15,
		'quantity' : 0,
		'picUrl' : "images/cucumbers-food-gherkins-8694.jpg"
	},
	{
		'itemID' : 1003,
		'itemName' : "Orange",
		'description' : "Navel (seeded).",
		'stock' : 48,
		'quantity' : 0,
		'picUrl' : "images/citrus-food-fresh-42059.jpg"
	},
	{
		'itemID' : 1004,
		'itemName' : "Ham",
		'description' : "3KG Spiral",
		'stock' : 6,
		'quantity' : 0,
		'picUrl' : "images/blur-close-up-cooking-161533.jpg"
	},
	{
		'itemID' : 1005,
		'itemName' : "Chicken Breast",
		'description' : "4KG skinless/boneless",
		'stock' : 11,
		'quantity' : 0,
		'picUrl' : "images/chicken_breast_tenderloin.jpg"
	}
];

const specialDatabase =
[
	{
		'itemID' : 6327,
		'itemName' : "Ash Brick",
		'description' : "Testeroni",
		'stock' : 26,
		'quantity' : 0,
		'picUrl' : "../images/placeholder.png"
	},
	{
		'itemID' : 6338,
		'itemName' : "Ash Dust",
		'description' : "Testeroni",
		'stock' : 5,
		'quantity' : 0,
		'picUrl' : "../images/placeholder.png"
	}
];

const historyDatabase =
[
	{
		'orderID' : 213314,
		'numItems' : 47,
		'dateShipped' : "",
		'dateReceived' : "",
		'status' : "",
		'orderList' : new Array
	}
];

const autoOrderDatabase =
[
	{
		'itemID' : 24677,
		'itemName' : "Mario Mushroom",
		'description' : "Makes you feel high, maaaaan.",
		'stock' : 69,
		'quantity' : 0,
		'picUrl' : "images/placeholder.png"
	}
];