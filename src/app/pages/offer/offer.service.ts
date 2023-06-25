import { Observable, Subject, first } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Option } from 'src/app/components/dropdown/dropdown.component';
import { API_URL } from 'src/environments/environment';
import { FiltersArrayKey } from './offer-advancend-filters/offer-advancend-filters.component';

export type AdvancedFiltersModel = { [key: string]: Option[] };

@Injectable()
export class OfferService {

  private filters$: BehaviorSubject<OfferFilter[]> = new BehaviorSubject<OfferFilter[]>([]);

  private items$: BehaviorSubject<OfferItem[]> = new BehaviorSubject<OfferItem[]>([]);
  meta$: BehaviorSubject<null | MetaModel> = new BehaviorSubject<null | MetaModel>(null);

  private activeFilter$: Subject<OfferFilter> = new Subject<OfferFilter>();
  private searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private page$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private advancedFilters$: BehaviorSubject<AdvancedFiltersModel> = new BehaviorSubject<AdvancedFiltersModel>({});

  private blossoms$: BehaviorSubject<Option[]> = new BehaviorSubject<Option[]>([]);
  private growthRate$: BehaviorSubject<Option[]> = new BehaviorSubject<Option[]>([]);
  private use$: BehaviorSubject<Option[]> = new BehaviorSubject<Option[]>([]);
  private position$: BehaviorSubject<Option[]> = new BehaviorSubject<Option[]>([]);
  private showOnly$: BehaviorSubject<Option[]> = new BehaviorSubject<Option[]>([]);
  private soil$: BehaviorSubject<Option[]> = new BehaviorSubject<Option[]>([]);
  private type$: BehaviorSubject<Option[]> = new BehaviorSubject<Option[]>([]);
  private typeOfHabit$: BehaviorSubject<Option[]> = new BehaviorSubject<Option[]>([]);

  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  loadFilters(lang: string): void {
    this.http.get<OfferFilter[]>(`${API_URL}/plants/categories`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe({
        next: filters => {
          this.filters$.next(filters)
        },
        error: error => console.error(error)
      });
  }

  loadItems(search: string, page: number, category: string, advancedFilters: AdvancedFiltersModel, lang: string): void {
    this.loading$.next(true);
    let queryParams = new HttpParams()
      .appendAll({
        search,
        page,
        category,
        category_ids: advancedFilters['category_ids'] ? advancedFilters['category_ids'].map(f => f.id).toString() : [],
        position_ids: advancedFilters['position_ids'] ? advancedFilters['position_ids'].map(f => f.id).toString() : [],
        type_ids: advancedFilters['type_ids'] ? advancedFilters['type_ids'].map(f => f.id).toString() : [],
        type_of_habit_ids: advancedFilters['type_of_habit_ids'] ? advancedFilters['type_of_habit_ids'].map(f => f.id).toString() : [],
        plant_growth_rate_ids: advancedFilters['plant_growth_rate_ids'] ? advancedFilters['plant_growth_rate_ids'].map(f => f.id).toString() : [],
        plant_soil_ids: advancedFilters['plant_soil_ids'] ? advancedFilters['plant_soil_ids'].map(f => f.id).toString() : [],
      })
    this.http.get<OfferResponse>(`${API_URL}/plants`, { params: queryParams, headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe(items => {
        this.items$.next(items.plants);
        this.meta$.next(items.meta);
        this.loading$.next(false);
      });
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

  getSearchTerm(): Observable<string> {
    return this.searchTerm$.asObservable();
  }
  
  getPage(): Observable<number> {
    return this.page$.asObservable();
  }

  setPage(num: number): void {
    this.page$.next(num);
  }

  getAdvancedFilters(): Observable<AdvancedFiltersModel> {
    return this.advancedFilters$.asObservable();
  }

  setAdvancedFilters(filters: AdvancedFiltersModel): void {
    this.advancedFilters$.next(filters);
  }

  // load advanced filters

  get advancedBlossoms$(): Observable<Option[]> {
    return this.blossoms$.asObservable();
  }

  get advancedGrowthRate$(): Observable<Option[]> {
    return this.growthRate$.asObservable();
  }

  get advancedUse$(): Observable<Option[]> {
    return this.use$.asObservable();
  }

  get advancedPosition$(): Observable<Option[]> {
    return this.position$.asObservable();
  }

  get advancedShowOnly$(): Observable<Option[]> {
    return this.showOnly$.asObservable();
  }

  get advancedSoil$(): Observable<Option[]> {
    return this.soil$.asObservable();
  }

  get advancedType$(): Observable<Option[]> {
    return this.type$.asObservable();
  }

  get advancedTypeOfHabit$(): Observable<Option[]> {
    return this.typeOfHabit$.asObservable();
  }

  loadAdvanced(lang: string): void {
    this.http.get<{ id: number, name: string }[]>(`${API_URL}/plants/blossoms`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe({
        next: items => this.blossoms$.next(items.map(i => ({ id: i.id, name: i.name, checked: false, key: FiltersArrayKey.BLOOMING }))),
        error: error => console.error(error)
      });
    this.http.get<{ id: number, name: string }[]>(`${API_URL}/plants/growth_rate`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe({
        next: items => this.growthRate$.next(items.map(i => ({ id: i.id, name: i.name, checked: false, key: FiltersArrayKey.GROWTH_RATE }))),
        error: error => console.error(error)
      });
    this.http.get<{ id: number, name: string }[]>(`${API_URL}/plants/use`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe({
        next: items => this.use$.next(items.map(i => ({ id: i.id, name: i.name, checked: false, key: FiltersArrayKey.APPLICATION }))),
        error: error => console.error(error)
      });
    this.http.get<{ id: number, name: string }[]>(`${API_URL}/plants/position`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe({
        next: items => this.position$.next(items.map(i => ({ id: i.id, name: i.name, checked: false, key: FiltersArrayKey.POSITION }))),
        error: error => console.error(error)
      });
    this.http.get<{ id: number, name: string }[]>(`${API_URL}/plants/pot`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe({
        next: items => this.showOnly$.next(items.map(i => ({ id: i.id, name: i.name, checked: false, key: FiltersArrayKey.SHOW_ONLY }))),
        error: error => console.error(error)
      });
    this.http.get<{ id: number, name: string }[]>(`${API_URL}/plants/soil`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe({
        next: items => this.soil$.next(items.map(i => ({ id: i.id, name: i.name, checked: false, key: FiltersArrayKey.SOIL }))),
        error: error => console.error(error)
      });
    this.http.get<{ id: number, name: string }[]>(`${API_URL}/plants/type`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe({
        next: items => this.type$.next(items.map(i => ({ id: i.id, name: i.name, checked: false, key: FiltersArrayKey.HABIT }))),
        error: error => console.error(error)
      });
    this.http.get<{ id: number, name: string }[]>(`${API_URL}/plants/type_of_habit`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe({
        next: items => this.typeOfHabit$.next(items.map(i => ({ id: i.id, name: i.name, checked: false, key: FiltersArrayKey.HABIT_TYPE }))),
        error: error => console.error(error)
      });
  }


}

export interface MetaModel {
  all: number;
  page: string;
  per_page: number;
}

export interface OfferFilter {
  name: string;
  id: string;
}

export interface OfferResponse {
  meta: any;
  plants: OfferItem[];
}

export interface OfferItem {
  crown_with_after_10_years: string;
  description: string;
  enabled: boolean;
  height_after_10_years: string;
  id: number;
  images: string[];
  name: string;
  own_product: boolean;
  plant_blossoms: ObjItem[];
  plant_category: ObjItem | null;
  plant_cateogry_id: number;
  plant_growth_rate: ObjItem | null;
  plant_growth_rate_id: number;
  plant_position: ObjItem | null;
  plant_position_id: number;
  plant_pots: ObjItem[];
  plant_soil: ObjItem | null;
  plant_soil_id_id: number;
  plant_type: ObjItem | null;
  plant_type_of_habit: ObjItem | null;
  plant_type_of_habit_id: number;
  plant_uses: ObjItem[];
  promoted: boolean;
  short_description: string;
  width_after_10_years: string;
}

export interface ObjItem {
  name: string;
  id: number;
  created_at: string;
  updated_at: string;
}