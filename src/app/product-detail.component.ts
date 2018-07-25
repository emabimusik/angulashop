import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ProductService} from './productService';
import {Product} from './product.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail',
  templateUrl: './product-detail.component.html',
 
})
export class ProductDetailComponent {
  title = ' Angular-Shop';
  product ;
  prices :number[] = [Math.floor(Math.random() * 598)]
  constructor( private api : ProductService,private route:ActivatedRoute,
   private location: Location
){}
  ngOnInit():void{
    
    this.GetProduct();
  }
 
  GetProduct(){
    const id = this.route.snapshot.params['id'];
    this.api.getProductById(id).subscribe((product=>this.product=product));
  }
  goBack(): void {
    this.location.back();
}
}
