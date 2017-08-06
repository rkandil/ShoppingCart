
import { routing } from './app-routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SearchComponent } from './search/search.component';

import { ShoppingService } from './services/shopping-service.service';
import { NewPipe } from './pipes/new.pipe';
import { ProductItemsComponent } from './product-items/product-items.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from './shared/shared.module';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { DollarPipe } from './pipes/dollar.pipe';
import { ShowDetailsDirectiveDirective } from './directives/show-details-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    SearchComponent,

    NewPipe,
    ProductItemsComponent,
    ShowDetailsDirectiveDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    SharedModule.forRoot()
  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
