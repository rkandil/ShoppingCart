import { GlobalFunctions } from '../globals/global-functions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  private checkoutForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, GlobalFunctions.emailValidator]],
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]]
    }
    );
  }

  private checkout(): any {
    console.log('checkout yet to be implemented');
  }

}
