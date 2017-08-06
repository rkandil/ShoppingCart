
import { CheckoutComponent } from '../checkout/checkout.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [



  { path: '', component: CheckoutComponent }

];



export const routing: ModuleWithProviders = RouterModule.forChild(routes);