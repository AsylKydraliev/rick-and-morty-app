import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() genderFilter = new EventEmitter<string>();
  @Output() statusFilter = new EventEmitter<string>();
  genderValue = '';
  statusValue = '';

  filterByGender(value: any) {
    const element = <HTMLButtonElement>value.target;
    this.genderFilter.emit(element.value);
    this.genderValue = element.value;
  }

  filterByStatus(value: any) {
    const element = <HTMLButtonElement>value.target;
    this.statusFilter.emit(element.value);
    this.statusValue = element.value;
  }
}
