import { Observable } from 'rxjs';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class OfferService {

  mockedFilters: OfferFilter[] = [
    { name: 'Liściaste', key: 'deciduous' },
    { name: 'Iglaste', key: 'coniferous' },
    { name: 'Szczepione', key: 'vaccinated' },
    { name: 'Szczepione pienne', key: 'Grafted springs' }
  ];

  mockedItems: OfferItem[] = [
    { url: '/assets/offer/offer-gallery-1.jpg', text: 'Acer palmatum "Atropurpureum"' },
    { url: '/assets/offer/offer-gallery-2.jpg', text: 'Acer palmatum "Bloodgood"' },
    { url: '/assets/offer/offer-gallery-3.jpg', text: 'Acer palmatum "Crimson Queen"' },
    { url: '/assets/offer/offer-gallery-4.jpg', text: 'Acer palmatum "Emerald Lace"' },
    { url: '/assets/offer/offer-gallery-5.jpg', text: 'Acer palmatum "Garnet"' },
    { url: '/assets/offer/offer-gallery-6.jpg', text: 'Acer palmatum "Firecracker"' },
    { url: '/assets/offer/offer-gallery-1.jpg', text: 'Acer palmatum "Atropurpureum"' },
    { url: '/assets/offer/offer-gallery-2.jpg', text: 'Acer palmatum "Bloodgood"' },
    { url: '/assets/offer/offer-gallery-3.jpg', text: 'Acer palmatum "Crimson Queen"' },
    { url: '/assets/offer/offer-gallery-4.jpg', text: 'Acer palmatum "Emerald Lace"' },
    { url: '/assets/offer/offer-gallery-5.jpg', text: 'Acer palmatum "Garnet"' },
    { url: '/assets/offer/offer-gallery-6.jpg', text: 'Acer palmatum "Firecracker"' },
    { url: '/assets/offer/offer-gallery-1.jpg', text: 'Acer palmatum "Atropurpureum"' },
    { url: '/assets/offer/offer-gallery-2.jpg', text: 'Acer palmatum "Bloodgood"' },
    { url: '/assets/offer/offer-gallery-3.jpg', text: 'Acer palmatum "Crimson Queen"' },
    { url: '/assets/offer/offer-gallery-4.jpg', text: 'Acer palmatum "Emerald Lace"' },
    { url: '/assets/offer/offer-gallery-5.jpg', text: 'Acer palmatum "Garnet"' },
    { url: '/assets/offer/offer-gallery-6.jpg', text: 'Acer palmatum "Firecracker"' }
  ];

  private filters$: BehaviorSubject<OfferFilter[]> = new BehaviorSubject<OfferFilter[]>([]);
  private items$: BehaviorSubject<OfferItem[]> = new BehaviorSubject<OfferItem[]>([]);
  private activeFilter$: BehaviorSubject<OfferFilter> = new BehaviorSubject<OfferFilter>(this.mockedFilters[0]);
  private searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private page$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor(private http: HttpClient) {
    this.loadFilters();
    combineLatest([this.searchTerm$, this.activeFilter$, this.page$])
      .subscribe(([searchTerm, filter, page]) => {
        // this.http.get<OfferItem[]>(`GET_OFFER_ITEM_URL?search=${searchTerm}&filter=${filter}&page=${page}`)
        //   .subscribe({
        //     next: val => this.items$.next(val),
        //     error: error => console.error(error)
        //   });

        this.items$.next(this.mockedItems);
      });
  }

  loadFilters(): void {
    // this.http.get<OfferFilter[]>(`GET_FILTERS`)
    //   .pipe(first())
    //   .subscribe({
    //     next: filters => this.filters$.next(filters),
    //     error: error => console.error(error)
    //   });
    this.filters$.next(this.mockedFilters);
  }

  loadItems(): void {
    this.activeFilter$
  }

  getItems(): Observable<OfferItem[]> {
    return this.items$.asObservable();
  }

  getFilters(): Observable<OfferFilter[]> {
    return this.filters$.asObservable();
  }

  setSearchTerm(val: string): void {
    this.searchTerm$.next(val);
  }

  setActiveFilter(filter: OfferFilter): void {
    this.activeFilter$.next(filter);
  }

  getActiveFilter(): Observable<OfferFilter> {
    return this.activeFilter$.asObservable();
  }
  
  getPage(): Observable<number> {
    return this.page$.asObservable();
  }

  setPage(num: number): void {
    this.page$.next(num);
  }
}

export interface OfferFilter {
  name: string;
  key: string;
}

export interface OfferItem {
  url: string;
  text: string;
}