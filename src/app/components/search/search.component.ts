import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  value = '';
  keyword = 'name';

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() selectedItem = new EventEmitter<string>();
  @Input() characters: any;
  @Input() locations: any;

  onSearch(value: string) {
    this.newItemEvent.emit(value);
  }

  selectEvent(value: any) {
    this.selectedItem.emit(value.name);
  }
}
