import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router"; 
import {ProductService} from './productService';
import {AppComponent} from './app.component'
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent } from './product-detail.component';
import {CartComponent} from './cart.component';
import { CartService } from './cartService';
const routes: Routes = [
  
  { path: "angulashop/shopApi", redirectTo:"", pathMatch: 'full' },
  { path: "", component: ProductListComponent },
  { path: "detail/:id", component: ProductDetailComponent  },
  { path: "cart", component: CartComponent  }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
