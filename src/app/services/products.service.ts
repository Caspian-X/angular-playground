import { Injectable } from '@angular/core';
import { Product } from '../../types';
import { dummyProducts } from '../../dummyData';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	constructor() { }

	getProducts(page: number, perPage: number): Product[] {
		return dummyProducts.slice(page * perPage, (page + 1) * perPage);
	}

	getAllProducts(): Product[] {
		return dummyProducts;
	}

	addItem(image: string, name: string, price: string, rating: number): Product | null {
		const maxId = dummyProducts.reduce((max: number, item: Product) => Math.max(max, item.id!), 0);

		const newItem: Product = {
			id: maxId + 1,
			image, name, price, rating
		}

		dummyProducts.push(newItem);

		return null;
	}

	updateItem(id: number, image: string, name: string, price: string, rating: number): void {
		const index = dummyProducts.findIndex((item: Product) => item.id === id);

		if (index === -1) {
			console.error("Item not found");
			throw new Error("Item not found");
		}

		dummyProducts[index] = {
			id,
			image,
			name,
			price,
			rating,
		};
	}

	deleteItem(id: number): void {
		const index = dummyProducts.findIndex((item: Product) => item.id === id);

		if (index === -1) {
			console.error("Item not found");
			throw new Error("Item not found");
		}

		dummyProducts.splice(index, 1);
	}

}
