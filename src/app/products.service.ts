import { Subject } from 'rxjs';

export class ProductsService {
  private products = ['Hat', 'Gloves', 'Goggles'];
  productsUpdated = new Subject();

  addProducts(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next();
  }

  getProducts() {
    return [...this.products];
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
    this.productsUpdated.next();
  }
}
