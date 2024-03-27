import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementHomeComponent } from './product-management-home/product-management-home.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

const routes: Routes = [
  { path: 'home', component: ProductManagementHomeComponent },
  { path: 'add', component: AddEditProductComponent },
  { path: 'edit', component: AddEditProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
