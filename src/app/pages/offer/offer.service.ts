import { Observable } from 'rxjs';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { mockedFilters, mockedItems } from './offer-mocked.const';

@Injectable()
export class OfferService {

  private filters$: BehaviorSubject<OfferFilter[]> = new BehaviorSubject<OfferFilter[]>([]);
  private items$: BehaviorSubject<OfferItem[]> = new BehaviorSubject<OfferItem[]>([]);
  private activeFilter$: BehaviorSubject<OfferFilter> = new BehaviorSubject<OfferFilter>(mockedFilters[0]);
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

        this.items$.next(mockedItems);
      });
  }

  loadFilters(): void {
    // this.http.get<OfferFilter[]>(`GET_FILTERS`)
    //   .pipe(first())
    //   .subscribe({
    //     next: filters => this.filters$.next(filters),
    //     error: error => console.error(error)
    //   });
    this.filters$.next(mockedFilters);
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
  details: {
    urls: string[];
    available_containers: string;
    desc: string;
    height_after_10_years: number;
    width_after_10_years: number;
    habit: string;
    position: string;
    soil: string;
  }
}