/**s
 * New typescript file
 */
import { ProductItemsComponent } from './product-items/product-items.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [


  { path: '', redirectTo: '/shopping', pathMatch: 'full' },
  { path: 'shopping', component: ProductItemsComponent },
  { path: 'checkout', loadChildren: 'app/lazy/cart.module#LazyModule' }

];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);