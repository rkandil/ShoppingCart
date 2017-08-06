
import { ShoppingCartItem } from '../beans/shoppingcartitem';
import { GlobalFunctions } from '../globals/global-functions';

import { Component, OnInit, Input } from '@angular/core';
import { ShoppingService } from '../services/shopping-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {



  private shoppingCartItems: Observable<ShoppingCartItem[]>;

  private hasPrevious: boolean;
  private hasNext: boolean;

  constructor(public shoppingService: ShoppingService) { }



  private updateSelected(event, product: ShoppingCartItem) {
    this.shoppingService.updateCount();

    if (event.target.checked) {

      product.quantity = 1;
    } else {
      product.quantity = 0;
    }
  }


  ngOnInit() {
    this.shoppingCartItems = this.shoppingService.getShoppingCartItems();


  }

}
