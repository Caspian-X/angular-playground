import { Injectable } from '@angular/core';
import { Image, Product } from '../../types';
import { dummyProducts, filterTree } from '../../dummyData';
import { TreeNode } from 'primeng/api';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	// products that meet the current filter criteria
	activeProducts: Product[];
	allProducts: Product[];

	constructor() {
		this.allProducts = this.getAllProducts();
		this.activeProducts = this.allProducts;
	}

	getProducts(selectedFiles: TreeNode[], page: number, perPage: number): Product[] {
		this.filterProducts(selectedFiles);
		return this.activeProducts
			.sort((a: Product, b: Product) => a.name.localeCompare(b.name))
			.slice(page * perPage, (page + 1) * perPage);
	}

	getAllProducts(): Product[] {
		return dummyProducts;
	}

	getActiveProducts(): Product[] {
		return this.activeProducts;
	}

	/**
	 * Sets the active products based on the filter settings.
	 * @param selectedFiles
	 */
	filterProducts(selectedFiles: TreeNode[]) {
		if (!selectedFiles || selectedFiles.length === 0) {
			this.activeProducts = this.allProducts;
		} else {
			this.activeProducts = this.allProducts.filter((product: Product) => {
				let productFound = false;
				selectedFiles.forEach((file) => {
					if (file.label) {
						if (product.types?.includes(file.label) || product.attributes?.includes(file.label)) {
							productFound = true;
						}
					}
				});
				return productFound;
			})
		}
	}

	addItem(image: Image, name: string, price: string, rating: number): Product | null {
		const maxId = dummyProducts.reduce((max: number, item: Product) => Math.max(max, item.id!), 0);

		const newItem: Product = {
			id: maxId + 1,
			image, name, price, rating
		}

		dummyProducts.push(newItem);

		return null;
	}

	updateItem(id: number, image: Image, name: string, price: string, rating: number): void {
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

	getFilterTree(): TreeNode[] {
		return filterTree;
	}

}
