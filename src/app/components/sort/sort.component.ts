import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Output() sortCriterion = new EventEmitter<string>();
  sortValue = '';

  onSort(value: any) {
    const element = <HTMLButtonElement>value.target;
    this.sortCriterion.emit(element.value);
    this.sortValue = element.value;
  }
}
