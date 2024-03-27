import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductManagementHomeComponent } from './product-management-home/product-management-home.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductManagementHomeComponent, AddEditProductComponent],
  imports: [CommonModule, ProductsRoutingModule, ReactiveFormsModule],
})
export class ProductsModule {}
