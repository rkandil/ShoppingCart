/**
 * New typescript file
 */

import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';
import { routing } from './cart.routing';
import { CommonModule } from '@angular/common';


import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  imports: [routing,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CheckoutComponent,
    CheckoutFormComponent]
})

export class LazyModule { }