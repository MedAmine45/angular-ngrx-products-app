import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    //let host = (Math.random()>0.6) ? environment.host : environment.unreachableHost;
   let host = environment.host;
    return this.http.get<Product[]>(host+"/products");
  }
  getSeletedProducts() : Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");
    }
    getAvailableProducts() : Observable<Product[]>{
      let host = environment.host;
      return this.http.get<Product[]>(host+"/products?available=true");
    }

    searchProducts(keyword:string) : Observable<Product[]>{
      let host = environment.host;
      return this.http.get<Product[]>(host+"/products?name_like="+keyword);
    }
    setSelected(product:Product) : Observable<Product>{
      let host = environment.host;
     // product.selected = !product.selected;
      return this.http.put<Product>(host+"/products/"+product.id,{...product ,selected:!product.selected });
    }
    deleteProduct(product:Product) : Observable<void>{
      let host = environment.host;
      //product.selected = !product.selected;
      return this.http.delete<void>(host+"/products/"+product.id);
    }
    save(product:Product) : Observable<Product>{
      let host = environment.host;
      return this.http.post<Product>(host+"/products",product);
    }
    getProduct(id:number) : Observable<Product>{
      let host = environment.host;
      return this.http.get<Product>(host+"/products/"+id);
    }
    updateProduct(product:Product) : Observable<Product>{
      let host = environment.host;
      return this.http.put<Product>(host+"/products/"+product.id, product);
    }
}
