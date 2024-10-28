import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css'
})
export class SearchEngineComponent {
  inStock: boolean = false;
  @Output() inStockChange = new EventEmitter<boolean>();

  onClick()
  {
    this.inStock = !this.inStock;
    this.inStockChange.emit(this.inStock);
    console.log(this.inStock);
  }
}
