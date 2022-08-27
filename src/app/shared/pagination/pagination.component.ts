import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() newPageEvent = new EventEmitter<number>();
  @Input() pages: number | undefined = 0;
  @Input() nextPage!: number;
  @Input() prevPage!: number;
  pageCount = [1, 2, 3, 4, 5];

  newPage(value: number) {
    this.newPageEvent.emit(value);
  }
}
