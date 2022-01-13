import { ShoppingCartSevice } from './../../shared/services/shopping-cart.service';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-products',
  template: `
    <section class="products">
      <app-product
        (addToCartClick)="addToCart($event)"
        [product]="product"
        *ngFor="let product of products"
      >
      </app-product>
    </section>
  `,
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(
    private produtSvc: ProductsService,
    private shoppingCartSvc: ShoppingCartSevice
  ) {}

  ngOnInit(): void {
    this.produtSvc
      .getProducts()
      .pipe(tap((products: Product[]) => (this.products = products)))
      .subscribe();
  }
  addToCart(product: Product): void {
    this.shoppingCartSvc.updateCart(product);
  }
}
