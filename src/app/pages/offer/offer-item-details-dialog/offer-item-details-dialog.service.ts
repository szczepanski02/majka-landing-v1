import { Inject, Injectable } from "@angular/core";
import { OfferItem } from "../offer.service";
import { BehaviorSubject, Observable, map } from "rxjs";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class OfferItemDetailsDialogService {

  private item$: BehaviorSubject<OfferItem | null> = new BehaviorSubject<OfferItem | null>(null);

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.item$.subscribe(item => {
      item ? this.document.body.classList.add('scroll-prevent') : this.document.body.classList.remove('scroll-prevent');
    });
  }

  open(item: OfferItem): void {
    this.item$.next(item);
  }

  get isOpen$(): Observable<boolean> {
    return this.item$.pipe(map(item => !!item));
  }

  getItem(): Observable<OfferItem | null> {
    return this.item$.asObservable();
  }

  close(): void {
    this.item$.next(null);
  }

}