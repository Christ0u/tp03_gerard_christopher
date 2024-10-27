import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import products from './data/products.json';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productsList: { id: Number, name: String, category: String, price: Number, inStock: Boolean, description: String, rating: number }[] = products;

  constructor() {
    console.log(this.productsList);
  }
}
