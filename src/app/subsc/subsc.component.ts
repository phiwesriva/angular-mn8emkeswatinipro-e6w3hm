import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-subsc',
  templateUrl: './subsc.component.html',
  styleUrls: ['./subsc.component.css']
})
export class SubscComponent implements OnInit {
checkoutForm;
  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      insights: '',
      copiesperissue: '',
      nameandsurname: '',
      Cname: '',
      address: '',
      Tnumber: '',
      Cnumber: '',
      Eaddress: '',
       Eaddress: '',
        DOB: '',
         Paddress: ''

    });}

  ngOnInit() {
  }

onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}