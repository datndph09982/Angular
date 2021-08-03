import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HelloComponent } from './hello/hello.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HelloComponent},
  {path: 'product',component: ProductComponent},
  {path: 'product/add',component: ProductAddComponent},
  {path: 'product/:id',component: ProductDetailComponent},
  {path: 'product/edit/:id',component: ProductEditComponent},
  {path: 'list',component: ListproductComponent},
  {path: 'admin',component: AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
