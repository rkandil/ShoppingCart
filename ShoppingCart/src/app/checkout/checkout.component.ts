import { GlobalFunctions } from '../globals/global-functions';
import { ShoppingService } from '../services/shopping-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  private selectedProducts = this.shoppingService.getSelectedProducts();
  private total = 0;

  constructor(public shoppingService: ShoppingService) { }

  ngOnInit() {
    
    this.total = GlobalFunctions.calculateTotal(this.selectedProducts.map((product) => { return product.quantity; }), this.selectedProducts.map((product) => { return product.price; }));
  }

}
