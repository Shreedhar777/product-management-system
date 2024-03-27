import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServices } from 'src/app/user/services/user.service';
import { ProductService } from '../services/product.service';
import { Product } from '../enums/product';

@Component({
  selector: 'app-product-management-home',
  templateUrl: './product-management-home.component.html',
  styleUrls: ['./product-management-home.component.scss'],
})
export class ProductManagementHomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortOptions = [
    { value: 'asc', label: 'Price: Low to High' },
    { value: 'desc', label: 'Price: High to Low' },
  ];
  logIn = false;

  searchForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServices,
    private router: Router,
    private productService: ProductService
  ) {
    this.logIn = this.userService.getLogInStatus();
    this.searchForm = this.formBuilder.group({
      search: [''],
      sort: [''],
    });
  }

  ngOnInit(): void {
    if (!this.logIn) {
      this.router.navigate(['./user/login']);
    }
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response.products;
      this.filteredProducts = this.products;
      this.filterProducts();
    });
  }

  filterProducts(): void {
    const searchTerm = this.searchForm.get('search')?.value.toLowerCase();
    const sortOption = this.searchForm.get('sort')?.value;
    this.filteredProducts = this.products.filter((product) => {
      const matchesSearch = product.product_name
        .toLowerCase()
        .includes(searchTerm);
      return matchesSearch;
    });

    if (sortOption === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'desc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  addProduct(): void {
    this.router.navigate(['./products/add']);
  }

  editProduct(productId: string): void {
    this.productService.setUpdateFlag(true, productId);
    this.router.navigate(['./products/edit']);
  }
}
