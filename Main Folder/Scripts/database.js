/**
 * NOTE
 * If picture doesn't show up,
 * you may want to remove " ../ " out of the picUrl
 * I did it and it worked.
 */

const regularDatabase = [{
		'itemID': 1000,
		'itemName': "Tomato",
		'description': "Vine ripe tomatoes.",
		'stock': 78,
		'quantity': 0,
		'picUrl': "images/close-up-delicious-farming-1447297.jpg",
		'Price': 0.99
	},
	{
		'itemID': 1001,
		'itemName': "Banana",
		'description': "Yellow ripened.",
		'stock': 150,
		'quantity': 0,
		'picUrl': "images/bananas-bunch-food-41957.jpg",
		'Price': 0.59
	},
	{
		'itemID': 1002,
		'itemName': "Cucumber",
		'description': "Fresh picked.",
		'stock': 15,
		'quantity': 0,
		'picUrl': "images/cucumbers-food-gherkins-8694.jpg",
		'Price': 1.29
	},
	{
		'itemID': 1003,
		'itemName': "Orange",
		'description': "Navel (seeded).",
		'stock': 48,
		'quantity': 0,
		'picUrl': "images/citrus-food-fresh-42059.jpg",
		'Price': 1.99
	},
	{
		'itemID': 1004,
		'itemName': "Ham",
		'description': "3KG Spiral",
		'stock': 6,
		'quantity': 0,
		'picUrl': "images/blur-close-up-cooking-161533.jpg",
		'Price': 2.59
	},
	{
		'itemID': 1005,
		'itemName': "Chicken Breast",
		'description': "4KG skinless/boneless",
		'stock': 11,
		'quantity': 0,
		'picUrl': "images/chicken_breast_tenderloin.jpg",
		'Price': 3.19
	},
	{
		'itemID': 1006,
		'itemName': "Hamburger Patties",
		'description': "3 ground chuck patties",
		'stock': 158,
		'quantity': 0,
		'picUrl': "images/hamburger-patty.jpg",
		'Price': 4.59
	},
	{
		'itemID': 1007,
		'itemName': "Ground Beef",
		'description': "5KG lean ground beef",
		'stock': 5,
		'quantity': 0,
		'picUrl': "images/ground-beef.jpg",
		'Price': 25.99
	},
	{
		'itemID': 5835,
		'itemName': "Disposable Napkins",
		'description': "2000 disposable napkins",
		'stock': 2,
		'quantity': 0,
		'picUrl': "images/napkins.jpg",
		'Price': 34.99
	},
	{
		'itemID': 4738,
		'itemName': "Drinking Straw",
		'description': "2000 drinking straws",
		'stock': 2,
		'quantity': 0,
		'picUrl': "images/drinking-straw.jpg",
		'Price': 19.99
	},
	{
		'itemID': 6327,
		'itemName': "Ash Brick",
		'description': "Weight:3kg<br>Height:2 inches<br>Length:8 inches",
		'stock': 26,
		'quantity': 0,
		'picUrl': "images/AshBrick.jpg",
		'Price': 5.99,
		'reference': "https://www.justdial.com/Vijayawada/SRI-DURGA-Bhavani-Flyash-Bricks-MYLAVARAM-Ibrahimpatnam/0866PX866-X866-180117200512-Z4H6_BZDET/photos"
	},
];

const historyDatabase = [{
	'orderID': 213314,
	'numItems': 47,
	'dateShipped': "",
	'dateReceived': "",
	'status': "",
	'orderList': new Array
}];

const autoOrderDatabase = [{
	'itemID': 24677,
	'itemName': "Brown Mushrooms",
	'description': "12 x 454G Unwashed",
	'stock': 37,
	'quantity': 0,
	'picUrl': "images/mushroom.jpg",
	'Price': 18.99,
}];