import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import {
  AddProductRequestData,
  Product,
  SingleProductDetailRequest,
} from '../enums/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit, OnDestroy {
  @Input() mode: 'add' | 'edit' = 'add';
  @Input() product?: Product;
  notificationMessage = '';

  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productImage: ['', Validators.required],
      productDescription: [''],
      productPrice: ['', [Validators.required, Validators.min(0)]],
    });
    this.mode = this.productService.getUpdateFlag() ? 'edit' : 'add';
  }

  ngOnInit(): void {
    if (this.mode === 'edit') {
      const request: SingleProductDetailRequest = {
        single_product: true,
        product_id: this.productService.getProductId(),
      };
      this.productService.getProductDetails(request).subscribe((response) => {
        this.product = response.products;
        this.productForm.patchValue({
          productName: this.product.product_name,
          productImage: this.product.image,
          productDescription: this.product.description,
          productPrice: this.product.price,
        });
      });
      this.productService.setUpdateFlag(false, '');
    } else {
      this.productForm.reset();
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.mode === 'edit') {
        const productDetails: AddProductRequestData = {
          add_product: true,
          product_name: this.productForm.value.productName,
          description: this.productForm.value.productDescription,
          image: this.productForm.value.productImage,
          price: this.productForm.value.productPrice,
        };
        this.productService.updateProduct(productDetails).subscribe({
          next: (response) => {
            console.log('Successfully updated product details');
            this.productForm.reset();
            this.router.navigate(['./products/home']);
          },
          error: (error) => {
            this.notificationMessage = 'An error occurred. Please Try again';
          },
        });
      } else {
        const productDetails: AddProductRequestData = {
          add_product: true,
          product_name: this.productForm.value.productName,
          description: this.productForm.value.productDescription,
          image: this.productForm.value.productImage,
          price: this.productForm.value.productPrice,
        };
        this.productService.addProduct(productDetails).subscribe({
          next: (response) => {
            console.log('Successfully added');
            this.productForm.reset();
            this.router.navigate(['./products/home']);
          },
          error: (error) => {
            this.notificationMessage = 'An error occurred. Please Try again';
          },
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.productForm.reset();
  }
}
