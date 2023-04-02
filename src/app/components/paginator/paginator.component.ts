import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges, AfterViewInit {

  @Input() page!: number;
  @Input() totalPages!: number;

  pagesToDisplay: number[] = [];

  simpleView = false;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.simpleView = event.target.innerWidth < 525;
  }

  ngAfterViewInit(): void {
    this.simpleView = window.innerWidth < 525;
  }

  ngOnChanges(_: SimpleChanges): void {
    this.pageSwitchesToDisplay();
  }

  pageChanged(num: number): void {
    this.onPageChange.emit(num);
  }

  pageSwitchesToDisplay(): void {
    if (this.page >= 5) {
      this.pagesToDisplay = [this.page -2, this.page -1, this.page, this.page +1, this.page +2];
    }
    if (this.page < 5) {
      this.pagesToDisplay = [1, 2, 3, 4, 5];
    }

    this.pagesToDisplay = this.pagesToDisplay.filter(p => p <= this.totalPages);
  }

  nextPage(): void {
    if (this.page !== this.totalPages) {
      this.pageChanged(this.page + 1);
    }
  }

  prevPage(): void {
    if (this.page !== 1) {
      this.pageChanged(this.page - 1);
    }
  }

  get showLastPage(): boolean {
    return this.pagesToDisplay[this.pagesToDisplay.length -1] !== this.totalPages;
  }

  get showFirstPage(): boolean {
    return this.pagesToDisplay[this.pagesToDisplay.length -1] > 5;
  }

}
