import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('header') headerDiv!: ElementRef<HTMLDivElement>;

  @Input() title!: string;
  @Input() description!: string;
  @Input() backgroundUrl!: string;
  @Input() overlays: HeaderOverlays[] = [];
  @Input() showCompanyName = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.headerDiv.nativeElement.style.backgroundImage = `url('${this.backgroundUrl}')`;

    if (this.hasLeftOverload) {
      this.headerDiv.nativeElement.style.clipPath = `polygon(0 0, 100% 0, 100% 93%, 0% 100%)`;
    }

    if (this.hasRightOverload) {
      this.headerDiv.nativeElement.style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 0 93%)`;
    }

    if (this.hasBilateralOverload) {
      this.headerDiv.nativeElement.style.clipPath = `polygon(100% 85%, 50% 100%, 0% 85%, 0% 0%, 100% 0%)`;
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  get hasCurtain(): boolean {
    return this.overlays.find(o => o === HeaderOverlays.CURTAIN) !== undefined;
  }

  get hasLeftOverload(): boolean {
    return this.overlays.find(o => o === HeaderOverlays.LEFT_OVERLOAD) !== undefined;
  }

  get hasRightOverload(): boolean {
    return this.overlays.find(o => o === HeaderOverlays.RIGHT_OVERLOAD) !== undefined;
  }

  get hasBilateralOverload(): boolean {
    return this.overlays.find(o => o === HeaderOverlays.BILATERAL_OVERLOAD) !== undefined;
  }

}


export enum HeaderOverlays {
  CURTAIN = 'curtain',
  LEFT_OVERLOAD = 'left_overload',
  RIGHT_OVERLOAD = 'right_overload',
  BILATERAL_OVERLOAD = 'bilateral_overload'
}