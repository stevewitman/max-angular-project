import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  productName = 'Book';
  isDisabled = true;
  products = ['Skis', 'Boots', 'Poles'];

  constructor() {
    setTimeout(() => {
      // this.productName = 'Tree';
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct(form) {
    // this.products.push(this.productName);
    if (form.valid) {
      this.products.push(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}
