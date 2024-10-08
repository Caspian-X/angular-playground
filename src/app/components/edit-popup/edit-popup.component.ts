import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { Image, Product } from '../../../types';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ProductsService } from '../../services/products.service';

@Component({
	selector: 'app-edit-popup',
	standalone: true,
	imports: [
		DialogModule,
		ButtonModule,
		FormsModule,
		RatingModule,
		CommonModule,
		ReactiveFormsModule,
		DropdownModule,
	],
	templateUrl: './edit-popup.component.html',
	styleUrl: './edit-popup.component.css'
})
export class EditPopupComponent {
	productForm: FormGroup<any>;

	constructor(private formBuilder: FormBuilder, private productsService: ProductsService) {
		this.productForm = this.formBuilder.group({
			name: ['', [Validators.required, this.specialCharacterValidator()]],
			image: [{ name: "", url: "" }],
			price: ['', [Validators.required]],
			rating: [0],
			selectedImage: [''],
			urlName: [''],
		})
	}

	@Input() display: boolean = false;
	@Input() header!: string;
	@Input() defaultImageText?: string;
	@Input() allProducts!: Product[];
	@Input() images!: Image[];
	@Input() product: any = {
		name: '',
		image: { name: "", url: "" },
		selectedImage: '',
		price: '',
		rating: 0,
		urlName: ''
	}

	@Output() displayChange = new EventEmitter<boolean>();
	@Output() confirm = new EventEmitter<Product>();
	@Output() cancel = new EventEmitter<void>();

	ngOnInit() {

	}

	ngOnChanges() {
		if (!this.productForm) return;
		this.product.selectedImage = this.product.image;
		this.productForm.patchValue(this.product);
	}

	onConfirm() {
		const { name, image, price, rating, selectedImage } = this.productForm.value;

		this.confirm.emit({
			name: name || '',
			image: selectedImage || { name: "", url: "" },
			price: price || '',
			rating: rating || 0,
		});

		this.display = false;
		this.displayChange.emit(this.display);
	}

	onCancel() {
		this.display = false;
		this.displayChange.emit(this.display)
	}

	specialCharacterValidator(): ValidatorFn {
		return (control) => {
			const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
				control.value
			);

			return hasSpecialCharacter ? { hasSpecialCharacter: true } : null;
		};
	}
}
