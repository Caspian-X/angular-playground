import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { Product } from '../../../types';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
	selector: 'app-edit-popup',
	standalone: true,
	imports: [
		DialogModule,
		ButtonModule,
		FormsModule,
		RatingModule,
		CommonModule,
		ReactiveFormsModule
	],
	templateUrl: './edit-popup.component.html',
	styleUrl: './edit-popup.component.css'
})
export class EditPopupComponent {
	productForm: FormGroup<any>;

	constructor(private formBuilder: FormBuilder) {
		this.productForm = this.formBuilder.group({
			name: ['', [Validators.required, this.specialCharacterValidator()]],
			image: [''],
			price: ['', [Validators.required]],
			rating: [0],
		})
	}

	@Input() display: boolean = false;
	@Input() header!: string;
	@Input() defaultImageText?: string;
	@Output() displayChange = new EventEmitter<boolean>();
	@Output() confirm = new EventEmitter<Product>();
	@Output() cancel = new EventEmitter<void>();

	@Input() product: Product = {
		name: '',
		image: '',
		price: '',
		rating: 0,
	}

	ngOnInit() {
		this.product.image = this.defaultImageText ? this.defaultImageText : 'bob';
		this.productForm.patchValue(this.product);
	}

	specialCharacterValidator(): ValidatorFn {
		return (control) => {
			const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
				control.value
			);

			return hasSpecialCharacter ? { hasSpecialCharacter: true } : null;
		};
	}

	ngOnChanges() {
		if (!this.productForm) return;
		this.productForm.patchValue(this.product);
	}

	onConfirm() {
		const { name, image, price, rating } = this.productForm.value;

		this.confirm.emit({
			name: name || '',
			image: image || '',
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
}
