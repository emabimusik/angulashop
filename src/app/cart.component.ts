import { Component } from '@angular/core';
import {CartItem} from './cartItem';
import { ActivatedRoute } from "@angular/router";
import { CartService } from './cartService';
import {ProductService} from './productService';

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html',
  
})
export class CartComponent {
    public items :CartItem[]=[];
    public total :number=0;
  
    id:number;
    constructor(private route:ActivatedRoute,private cartService:CartService,private api:ProductService){}
    ngOnInit(){
     
        this.route.params.subscribe(params=>{
             this.id = params['id'];
             if(this.id){
                
             }
        })
    }
}