import { ShoppingService } from '../services/shopping-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private showShoppingItems = true;


  constructor(public shoppingService: ShoppingService, public router: Router) { }

  ngOnInit() {
    if (this.router.url !== '/') {
      this.showShoppingItems = false;
    }
  }

}
