import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, combineLatest, first, map } from "rxjs";
import { API_URL } from "src/environments/environment";
import { SellingConditionAddonModel } from "./pages/selling-conditions/selling-conditions-additional-info/selling-conditions-additional-info.component";

@Injectable({
  providedIn: 'root'
})
export class TranslationsProviderService {

  private readonly lcKey = 'cl_lng';

  lang$: BehaviorSubject<Language> = new BehaviorSubject<Language>(Language.EN);
  coreTranslations$: BehaviorSubject<TranslationsModel[]> = new BehaviorSubject<TranslationsModel[]>([]);
  translations$: BehaviorSubject<PageTranslationsModel[]> = new BehaviorSubject<PageTranslationsModel[]>([]);

  coreLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  translationsLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  loadCoreTranslations(lang: string): void {
    this.coreLoading$.next(true);
    this.http.get<TranslationsModel[]>(`${API_URL}/translations`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe(translations => {
        this.coreTranslations$.next(translations);
        this.coreLoading$.next(false);
      });
  }

  loadTranslations(lang: string): void {
    this.translationsLoading$.next(true);
    this.http.get<PageTranslationsModel[]>(`${API_URL}/pages/all`, { headers: { 'Accept-Language': lang } })
      .pipe(first())
      .subscribe(translations => {
        this.translations$.next(translations);
        this.translationsLoading$.next(false);
      });
  }

  getCoreTranslation(key: string): Observable<string> {
    return this.coreTranslations$
      .pipe(map(translations => {
        const tx = translations.find(t => t.key === key);
        if (!tx) return 'Translation not found';
        return tx.value;
      }));
  }

  getAwards(lang: string): Observable<any> {
    return this.http.get<any>(`${API_URL}/awards`, { headers: { 'Accept-Language': lang } });
  }

  get homeTranslations(): Observable<PageTranslationsModel> {
    return this.translations$
      .pipe(map(translations => {
        const homeTranslations = translations.find(t => t.key === 'home');
        return homeTranslations!;
      }));
  }

  get offerTranslations(): Observable<PageTranslationsModel> {
    return this.translations$
      .pipe(map(translations => {
        const homeTranslations = translations.find(t => t.key === 'offer');
        return homeTranslations!;
      }));
  }

  get ownVarietyTranslations(): Observable<PageTranslationsModel> {
    return this.translations$
      .pipe(map(translations => {
        const homeTranslations = translations.find(t => t.key === 'own_varieties');
        return homeTranslations!;
      }));
  }

  get sellingConditionsTranslations(): Observable<PageTranslationsModel> {
    return this.translations$
      .pipe(map(translations => {
        const homeTranslations = translations.find(t => t.key === 'selling_conditions');
        return homeTranslations!;
      }));
  }

  get sellingPointsTranslations(): Observable<PageTranslationsModel> {
    return this.translations$
      .pipe(map(translations => {
        const homeTranslations = translations.find(t => t.key === 'selling_points');
        return homeTranslations!;
      }));
  }

  get ordersTranslations(): Observable<PageTranslationsModel> {
    return this.translations$
      .pipe(map(translations => {
        const homeTranslations = translations.find(t => t.key === 'orders');
        return homeTranslations!;
      }));
  }

  get contactTranslations(): Observable<PageTranslationsModel> {
    return this.translations$
      .pipe(map(translations => {
        const homeTranslations = translations.find(t => t.key === 'contact');
        return homeTranslations!;
      }));
  }

  get loading(): Observable<boolean> {
    return combineLatest([this.coreLoading$.asObservable(), this.translationsLoading$.asObservable()])
      .pipe(map(([l1, l2]) => l1 || l2));
  }

  getSellingConditionsAddition(lang: string): Observable<SellingConditionAddonModel[]> {
    return this.http.get<SellingConditionAddonModel[]>(`${API_URL}/pages/selling_conditions`, { headers: { 'Accept-Language': lang } });
  }

  getContacts(lang: string): Observable<ContactPersonModel[]> {
    return this.http.get<ContactPersonModel[]>(`${API_URL}/contacts`, { headers: { 'Accept-Language': lang } });
  }


  langInit(): void {
    const currentLang = this.getCurrentAppLang();
    if(currentLang) {
      this.setCurrentAppLang(currentLang);
    } else {
      this.setCurrentAppLang(Language.EN);
    }
  }

  getCurrentAppLang(): Language {
    const currentLang = localStorage.getItem(this.lcKey);
    if(this.isLangValid(currentLang)) {
      return currentLang as Language;
    }
    const appLang = navigator.language.toLowerCase().slice(0, 2);
    return this.isLangValid(appLang) ? appLang as Language : Language.EN;
  }

  setCurrentAppLang(lang: Language): void {
    localStorage.setItem(this.lcKey, lang);
    this.lang$.next(lang);
  }

  private isLangValid(subject: string | null): boolean {
    return Object.values(Language).includes(subject as Language);
  }

}

export interface ContactPersonModel {
  id: number;
  title: string;
  phone_number: string;
  image: string;
  additional_description: string;
}

export interface TranslationsModel {
  value: string;
  key: string;
}

export interface PageTranslationsModel {
  id: number;
  image: string;
  key: string;
  meta_description: string;
  meta_title: string;
  name: string;
  og_description: string;
  og_site_name: string;
  og_title: string;
  short_description: string;
  website_sections: PageSection[];
}

export interface PageSection {
  title: string;
  content: string;
  image: string;
}

export enum Language {
  PL = 'pl',
  EN = 'en',
  RU = 'ru',
  DE = 'de',
}