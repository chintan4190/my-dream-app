import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailGuard } from './products/product-detail.guard';


const routes: Routes = [
  {
    path: 'products/:id', 
    component: ProductDetailComponent,
     canActivate: [ProductDetailGuard]
  },
  {path: '', component: ProductListComponent},
  {path: 'products', redirectTo: '', component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
