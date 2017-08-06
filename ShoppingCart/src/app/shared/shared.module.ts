import { DollarPipe } from '../pipes/dollar.pipe';
import { ShoppingService } from '../services/shopping-service.service';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DollarPipe],
  exports: [
    DollarPipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ShoppingService]
    };
  }
}