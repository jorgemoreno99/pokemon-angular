import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  value: string = '';
  @Output() searchEmitter = new EventEmitter<string>();

  onSearch() {
    this.searchEmitter.emit(this.value);
  }


}
