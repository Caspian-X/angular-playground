import { TreeNode } from "primeng/api";
import { Product } from "./types";

export const dummyProducts: Product[] = [
	{
		id: 1,
		price: '2.99',
		name: "Butter",
		image: {
			name: "Butter",
			url: "assets/images/products/butter.jpeg",
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
			}
		]
	}
];
