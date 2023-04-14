import { OfferItemDetailsDialogService } from './../offer-item-details-dialog/offer-item-details-dialog.service';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { OfferItem } from '../offer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offer-item-hover-box',
  templateUrl: './offer-item-hover-box.component.html',
  styleUrls: ['./offer-item-hover-box.component.scss']
})
export class OfferItemHoverBoxComponent implements OnInit {

  @Input() item!: OfferItem;

  dialogItem$: Observable<OfferItem | null> = this.offerItemDetailsDialogService.getItem();

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private offerItemDetailsDialogService: OfferItemDetailsDialogService
    ) { }

  ngOnInit(): void {
    const windowWidth = window.innerWidth;
    const hoverBoxEl = this.elRef.nativeElement.querySelector('.hover-box');
    const parentEl = this.elRef.nativeElement.parentElement;
    const parentOffset = parentEl.getBoundingClientRect().left;

    if (windowWidth - parentOffset < 640) {
      this.renderer.removeStyle(hoverBoxEl, 'right');
      this.renderer.removeClass(hoverBoxEl, 'right');
      this.renderer.addClass(hoverBoxEl, 'left');
    } else {
      this.renderer.removeClass(hoverBoxEl, 'left');
      this.renderer.removeStyle(hoverBoxEl, 'left');
      this.renderer.addClass(hoverBoxEl, 'right');
    }
  }

}
