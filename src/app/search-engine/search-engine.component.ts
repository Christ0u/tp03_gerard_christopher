import { Component } from '@angular/core';

@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css'
})
export class SearchEngineComponent {
  inStock: boolean = false;

  onClick()
  {
    this.inStock = !this.inStock;
    console.log(this.inStock);
  }
}
