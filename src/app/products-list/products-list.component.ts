import { Component, Input, OnChanges } from '@angular/core';
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
  // Définition des clés comme étant des clés du type produit
  keys: Array<keyof typeof this.productsList[number]> = ["id", "name", "category", "price", "inStock", "description", "rating"];
  filteredProducts = [...this.productsList];
  @Input() inStock: boolean = false;

  ngOnChanges() {
    // Filtre les produits en fonction de inStock
    if (this.inStock) {
      // Si inStock est vrai, filtrer les produits
      this.filteredProducts = this.productsList.filter(product => product.inStock);
    }
    else {
      // Sinon, copier tous les produits
      this.filteredProducts = [...this.productsList];
    }
  }


  constructor() {
    for (let productIndex = 0; productIndex < this.productsList.length; productIndex++) {

      for (let keyIndex = 0; keyIndex < this.keys.length; keyIndex++) {
        console.log(this.productsList[productIndex][this.keys[keyIndex]]);
      }

    }
  }
}
