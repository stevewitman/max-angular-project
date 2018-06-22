import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  productName = 'Book';
  isDisabled = true;

  constructor() {
    setTimeout(() => {
      // this.productName = 'Tree';
      this.isDisabled = false;
    }, 3000);
  }
}
