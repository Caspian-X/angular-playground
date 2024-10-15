import { TreeNode } from "primeng/api";
import { Product } from "./types";

export const dummyProducts: Product[] = [
	{
		id: 1,
		price: '2.99',
		name: "Butter",
		image: {
			name: "Butter",
			url: "assets/images/products/butter.png",
		},
		rating: 4.2,
		types: ["Dairy"],
		attributes: [],
	},
	{
		id: 2,
		price: '2.49',
		name: "Cheese",
		image: {
			name: "Cheese",
			url: "assets/images/products/cheese.jpeg",
		},
		rating: 4.6,
		types: ["Dairy"],
		attributes: [],
	},
	{
		id: 3,
		price: '1.99',
		name: "Eggs",
		image: {
			name: "Eggs",
			url: "assets/images/products/eggs.jpeg",
		},
		rating: 4.5,
		types: [],
		attributes: ["Protein"],
	},
	{
		id: 4,
		price: '3.99',
		name: "Ice-cream",
		image: {
			name: "Ice Cream",
			url: "assets/images/products/ice-cream.jpeg",
		},
		rating: 4.9,
		types: ["Dairy"],
		attributes: [],
	},
	{
		id: 5,
		price: '1.99',
		name: "Milk",
		image: {
			name: "Milk",
			url: "assets/images/products/milk.jpeg",
		},
		rating: 5.0,
		types: ["Dairy"],
		attributes: [],
	},
	{
		id: 6,
		price: '0.49',
		name: "Yogurt",
		image: {
			name: "Yogurt",
			url: "assets/images/products/yogurt.jpeg",
		},
		rating: 4.5,
		types: ["Dairy"],
		attributes: ["Protein"],
	},
	{
		id: 7,
		price: '3.99',
		name: "Bacon",
		image: {
			name: "Bacon",
			url: "assets/images/products/bacon.jpeg",
		},
		rating: 4.9,
		types: ["Meat"],
		attributes: ["Protein"],
	},
	{
		id: 8,
		price: '4.99',
		name: "Beef",
		image: {
			name: "Beef",
			url: "assets/images/products/beef.jpeg",
		},
		rating: 5.0,
		types: ["Meat"],
		attributes: ["Protein"],
	},
	{
		id: 9,
		price: '2.99',
		name: "Chicken Wings",
		image: {
			name: "Chicken Wings",
			url: "assets/images/products/chicken-wings.jpeg",
		},
		rating: 3.8,
		types: ["Meat"],
		attributes: ["Protein"],
	},
	{
		id: 10,
		price: '1.99',
		name: "Drumsticks",
		image: {
			name: "Drumsticks",
			url: "assets/images/products/drumsticks.jpeg",
		},
		rating: 2.8,
		types: ["Meat"],
		attributes: ["Protein"],
	},
	{
		id: 11,
		price: '1.99',
		name: "Sour Cream",
		image: {
			name: "Sour Cream",
			url: "assets/images/products/sour-cream.jpeg",
		},
		rating: 4.5,
		types: ["Dairy"],
		attributes: [],
	},
	{
		id: 12,
		price: "1.99",
		name: "Cottage Cheese",
		image: {
			name: "Cottage Cheese",
			url: "assets/images/products/cottage-cheese.jpeg",
		},
		rating: 4.3,
		types: ["Dairy"],
		attributes: [],
	},
	{
		id: 13,
		price: "3.99",
		name: "Chicken Nuggets",
		image: {
			name: "Chicken Nuggets",
			url: "assets/images/products/chicken-nuggets.jpg",
		},
		rating: 4.7,
		types: ["Meat"],
		attributes: ["Protein"],
	},
	{
		id: 14,
		price: "10.99",
		name: "Ribs",
		image: {
			name: "Ribs",
			url: "assets/images/products/ribs.jpeg",
		},
		rating: 4.8,
		types: ["Meat"],
		attributes: ["Protein"],
	},
	{
		id: 15,
		price: "2.99",
		name: "Pork Chop",
		image: {
			name: "Pork Chop",
			url: "assets/images/products/pork-chop.jpeg",
		},
		rating: 4.2,
		types: ["Meat"],
		attributes: ["Protein"],
	},
	{
		id: 16,
		price: "4.99",
		name: "Hamburger Patties",
		image: {
			name: "Hamburger Patties",
			url: "assets/images/products/hamburger-patties.jpg",
		},
		rating: 4.9,
		types: ["Meat"],
		attributes: ["Protein"],
	},
	{
		id: 17,
		price: "3.99",
		name: "Ground Beef",
		image: {
			name: "Ground Beef",
			url: "assets/images/products/ground-beef.jpeg",
		},
		rating: 5.0,
		types: ["Meat"],
		attributes: ["Protein"],
	},
	{
		id: 18,
		price: "0.99",
		name: "Heavy Whipping Cream",
		image: {
			name: "Heavy Whipping Cream",
			url: "assets/images/products/heavy-whipping-cream.jpg",
		},
		rating: 4.0,
		types: ["Dairy"],
		attributes: [],
	},
	{
		id: 19,
		price: "0.99",
		name: "Orange Juice",
		image: {
			name: "Orange Juice",
			url: "assets/images/products/orange-juice.jpg",
		},
		rating: 4.5,
		types: ["Produce"],
		attributes: [],
	},
	{
		id: 20,
		price: "6.99",
		name: "Pumpkin Pie",
		image: {
			name: "Pumpkin Pie",
			url: "assets/images/products/pumpkin-pie.jpg",
		},
		rating: 4.2,
		types: ["Bakery"],
		attributes: ["Dessert"],
	},
	{
		id: 21,
		price: "6.99",
		name: "Pecan Pie",
		image: {
			name: "Pecan Pie",
			url: "assets/images/products/pecan-pie.jpg",
		},
		rating: 4.6,
		types: ["Bakery"],
		attributes: ["Dessert"],
	},
	{
		id: 22,
		price: "6.99",
		name: "Apple Pie",
		image: {
			name: "Apple Pie",
			url: "assets/images/products/apple-pie.jpg",
		},
		rating: 4.5,
		types: ["Bakery"],
		attributes: ["Dessert"],
	},
	{
		id: 23,
		price: "6.99",
		name: "Peach Pie",
		image: {
			name: "Peach Pie",
			url: "assets/images/products/peach-pie.jpg",
		},
		rating: 4.3,
		types: ["Bakery"],
		attributes: ["Dessert"],
	},
	{
		id: 24,
		price: "6.99",
		name: "Cherry Pie",
		image: {
			name: "Cherry Pie",
			url: "assets/images/products/cherry-pie.jpg",
		},
		rating: 4.4,
		types: ["Bakery"],
		attributes: ["Dessert"],
	},
	{
		id: 25,
		price: "6.99",
		name: "Blueberry Pie",
		image: {
			name: "Blueberry Pie",
			url: "assets/images/products/blueberry-pie.jpg",
		},
		rating: 3.6,
		types: ["Bakery"],
		attributes: ["Dessert"],
	},
	{
		id: 26,
		price: "2.99",
		name: "Fruit Popsicles",
		image: {
			name: "Fruit Popsicles",
			url: "assets/images/products/fruit-popsicles.jpg",
		},
		rating: 4.7,
		types: [],
		attributes: ["Dessert"],
	},
	{
		id: 27,
		price: "2.49",
		name: "Oranges",
		image: {
			name: "Oranges",
			url: "assets/images/products/oranges.jpg",
		},
		rating: 5.0,
		types: ["Produce"],
		attributes: [],
	},
	{
		id: 28,
		price: "2.99",
		name: "Red Grapes",
		image: {
			name: "Red Grapes",
			url: "assets/images/products/red-grapes.jpg",
		},
		rating: 4.3,
		types: ["Produce"],
		attributes: [],
	},
	{
		id: 29,
		price: "2.99",
		name: "Green Grapes",
		image: {
			name: "Green Grapes",
			url: "assets/images/products/green-grapes.jpg",
		},
		rating: 4.1,
		types: ["Produce"],
		attributes: [],
	},
	{
		id: 30,
		price: "2.99",
		name: "Purple Grapes",
		image: {
			name: "Purple Grapes",
			url: "assets/images/products/purple-grapes.jpg",
		},
		rating: 4.3,
		types: ["Produce"],
		attributes: [],
	},
];

export const filterTree: TreeNode[] = [
	{
		key: '0',
		label: "Product Types",
		children: [
			{
				key: '0-0',
				label: "Meat",
			},
			{
				key: "0-1",
				label: "Dairy",
			},
			{
				key: "0-2",
				label: "Produce",
			},
			{
				key: "0-3",
				label: "Bakery",
			}
		]
	},
	{
		key: '1',
		label: "Product Attributes",
		children: [
			{
				key: '1-0',
				label: "Protein",
			},
			{
				key: '1-1',
				label: "Dessert",
			}
		]
	}
];
