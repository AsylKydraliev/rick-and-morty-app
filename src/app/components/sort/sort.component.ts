import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Output() sortCriterion = new EventEmitter<string>();
  // @Output() sortDescending = new EventEmitter<string>();
  // @Output() sortById = new EventEmitter<string>();
  sortValue = '';

  onSort(value: any) {
    const element = <HTMLButtonElement>value.target;
    this.sortCriterion.emit(element.value);
    this.sortValue = element.value;
  }

  // onSortDescending(value: any) {
  //   const element = <HTMLButtonElement>value.target;
  //   this.sortDescending.emit(element.value);
  // }
  //
  // onSortByID(value: any) {
  //   const element = <HTMLButtonElement>value.target;
  //   this.sortById.emit(element.value);
  // }
}
