import { Injectable } from "@angular/core";
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import {Product} from './product.model';
import { Observable ,pipe} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ProductService {
      products;
      product;
      results
      private url:string='https://hplussport.com/api/products/';
     constructor(private http: HttpClient){
         
     }
     getProduct():Observable<any>{
        return this.http.get(this.url)
        .pipe(map((res: Response) =>
         this.products= res));
     }
   
     getProductById(id:number):Observable<any>{
       return this.getProduct().pipe(map(products => this.products.find(product=>product.id==id)));
          
    }
  
    
    
}