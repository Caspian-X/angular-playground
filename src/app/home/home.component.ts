import { Component, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { EditPopupComponent } from "../components/edit-popup/edit-popup.component";
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ProductComponent, CommonModule, PaginatorModule, EditPopupComponent, EditPopupComponent, ButtonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {

	constructor(
		private productsService: ProductsService
	) { }

	@ViewChild('paginator') paginator: Paginator | undefined;

	products: Product[] = [];
	totalRecords: number = 0;
	rows = 5

	displayEditPopup: boolean = false;
	displayAddPopup: boolean = false;

	toggleEditPopup(product: Product) {
		this.selectedProduct = product;
		this.displayEditPopup = true;
	}

	toggleDeletePopup(product: Product) {
		if (!product.id) {
			return;
		}

		this.deleteProduct(product.id);
	}

	toggleAddPopup() {
		this.displayAddPopup = true;
	}

	selectedProduct: Product = {
		id: 0,
		name: '',
		image: '',
		price: '',
		rating: 0,
	}

	onConfirmEdit(product: Product) {
		if (!this.selectedProduct.id) {
			return;
		}

		this.editProduct(product, this.selectedProduct.id);
		this.displayEditPopup = false;
	}

	onConfirmAdd(product: Product) {
		this.addProduct(product);
		this.displayAddPopup = false;
	}

	onProductOutput(product: Product) {
		console.log('output', product);
	}

	onPageChange(event: any) {
		this.fetchProducts(event.page, event.rows)
	}

	resetPaginator() {
		this.paginator?.changePage(0);
	}

	fetchProducts(page: number, perPage: number) {
		this.products = this.productsService.getProducts(page, perPage);
		this.totalRecords = this.productsService.getAllProducts().length;
	}

	editProduct(product: Product, id: number) {
		if (!product.id) {
			throw new Error('Cannot edit product without id');
		}
		this.productsService.updateItem(id, product.image, product.name, product.price, product.rating);
		this.resetPaginator();
	}

	addProduct(product: Product) {
		this.productsService.addItem(product.image, product.name, product.price, product.rating);
		this.resetPaginator();
	}

	deleteProduct(productId: number) {
		this.productsService.deleteItem(productId);
		this.resetPaginator();
	}

	ngOnInit() {
		this.fetchProducts(0, this.rows);
	}
}
