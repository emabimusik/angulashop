import { Component } from '@angular/core';
import {ProductService} from './productService';
import {Product} from './product.model';
@Component({
  selector: 'app-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
 
})
export class ProductListComponent {
  title = ' Angular-Shop';
  products:Product;
 
  errorMsg:Error;
  constructor( private api : ProductService){
    this.api.getProduct();
  }
  ngOnInit():void{
  
    this.api.getProduct()
    .subscribe(data =>{
         this.products = data
         },    
              error => this.errorMsg = error);
            
  }
}
