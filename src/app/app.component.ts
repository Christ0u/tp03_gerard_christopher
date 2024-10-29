import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsListComponent, SearchEngineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'tp03_gerard_christopher';

  inStock: boolean = false;
  maxPrice: number = 100;
  minRating: number = 0;

  onInStockChange(value: boolean) {
    this.inStock = value;
  }

  onMaxPriceChange(value: number) {
    this.maxPrice = value;
  }

  onMinRatingChange(value: number)
  {
    this.minRating = value;
  }
}
