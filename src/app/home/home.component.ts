import { Component, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Image, Product } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { EditPopupComponent } from "../components/edit-popup/edit-popup.component";
import { ButtonModule } from 'primeng/button';
import { BrowserService } from '../services/browser.service';
import { NEW_IMAGE_TEXT } from '../common/constants';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ProductComponent, CommonModule, PaginatorModule, EditPopupComponent, EditPopupComponent, ButtonModule, TreeModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {

	files!: TreeNode[];
	selectedFiles!: TreeNode[];

	constructor(
		private productsService: ProductsService,
		private browserService: BrowserService,
	) { }

	@ViewChild('paginator') paginator: Paginator | undefined;

	allProducts: Product[] = [];
	activeProducts: Product[] = [];
	products: Product[] = [];
	totalRecords: number = 0;
	currentPage = 0;
	rows = 7;
	defaultImageText = NEW_IMAGE_TEXT;

	displayEditPopup: boolean = false;
	displayAddPopup: boolean = false;

	selectedProduct: Product = {
		id: 0,
		name: '',
		image: {
			name: '',
			url: '',
		},
		price: '',
		rating: 0,
	}

	currentRole = "user";

	images: Image[] = [];

	ngOnInit() {
		this.fetchProducts(this.currentPage, this.rows);
		this.browserService.getRoleObservable().subscribe({
			next: (value) => this.currentRole = value,
			complete: () => { },
		});
		this.images = this.allProducts.map((product) => product.image);

		// Setup Tree
		this.files = this.productsService.getFilterTree();
		// Default to expanded nodes
		this.files.forEach((node) => {
			this.expandRecursive(node, true);
		});
	}

	treeChangeEvent(event: any) {
		this.fetchProducts(this.currentPage, this.rows);
		this.resetPaginator();
	}

	private expandRecursive(node: TreeNode, isExpand: boolean) {
		node.expanded = isExpand;
		if (node.children) {
			node.children.forEach((childNode) => {
				this.expandRecursive(childNode, isExpand);
			});
		}
	}

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

	onPageChange(event: any) {
		this.currentPage = event.page + 1;
		this.rows = event.rows;
		this.fetchProducts(event.page, event.rows);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	resetPaginator() {
		this.paginator?.changePage(0);
	}

	fetchProducts(page: number, perPage: number) {
		this.products = this.productsService.getProducts(this.selectedFiles, page, perPage);
		this.allProducts = this.productsService.getAllProducts();
		this.activeProducts = this.productsService.getActiveProducts();
	}

	editProduct(product: Product, id: number) {
		if (!id) {
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
}
