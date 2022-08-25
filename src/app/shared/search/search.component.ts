import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = '';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSearch(value: string) {
    this.newItemEvent.emit(value);
  }
}
