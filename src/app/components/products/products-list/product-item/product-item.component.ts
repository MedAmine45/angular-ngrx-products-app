import { Component, OnInit ,Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';
import { DeleteProductAction, SelectProductAction } from 'src/app/ngrx/products.action';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product | null = null ; 
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }
  OnSelect(product : Product ){
    this.store.dispatch(new SelectProductAction(product));
  }
  onDelete(product :Product){
    this.store.dispatch(new DeleteProductAction(product));
  }
  onEdit(product : Product){
    
  }
}
