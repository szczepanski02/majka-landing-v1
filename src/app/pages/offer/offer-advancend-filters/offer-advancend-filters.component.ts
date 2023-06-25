import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { FILTERS_HABIT, MOCKED_FILTERS } from './offer-advanced-filters.const';
import { DropdownComponent, Option } from 'src/app/components/dropdown/dropdown.component';
import { AdvancedFiltersModel, OfferService } from '../offer.service';
import { Observable } from 'rxjs';
import { TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-offer-advancend-filters',
  templateUrl: './offer-advancend-filters.component.html',
  styleUrls: ['./offer-advancend-filters.component.scss']
})
export class OfferAdvancendFiltersComponent {

  @ViewChildren(DropdownComponent) dropdowns!: QueryList<DropdownComponent>;

  public FiltersArrayKey = FiltersArrayKey;

  @Input() isOpen!: boolean;

  filtersHabit$ = this.offerService.advancedType$ as Observable<Option[]>;
  filtersBlooming$ = this.offerService.advancedBlossoms$ as Observable<Option[]>;
  filtersSoil$ = this.offerService.advancedSoil$ as Observable<Option[]>;
  filtersApplication$ = this.offerService.advancedUse$ as Observable<Option[]>;
  filtersHabitType$ = this.offerService.advancedTypeOfHabit$ as Observable<Option[]>;
  filtersPosition$ = this.offerService.advancedPosition$ as Observable<Option[]>;
  filtersGrowthRate$ = this.offerService.advancedGrowthRate$ as Observable<Option[]>;
  filtersShowOnly$ = this.offerService.advancedShowOnly$ as Observable<Option[]>;

  filters: AdvancedFiltersModel = {
    [FiltersArrayKey.HABIT]: [],
    [FiltersArrayKey.BLOOMING]: [],
    [FiltersArrayKey.SOIL]: [],
    [FiltersArrayKey.APPLICATION]: [],
    [FiltersArrayKey.HABIT_TYPE]: [],
    [FiltersArrayKey.POSITION]: [],
    [FiltersArrayKey.GROWTH_RATE]: [],
    [FiltersArrayKey.SHOW_ONLY]: [],
  }

  constructor(
    private offerService: OfferService,
    private txProvider: TranslationsProviderService,
  ) {}

  filterChanged(option: Option, key: FiltersArrayKey): void {
    if (option.checked) {
      this.filters[key].push(option);
    } else {
      this.filters[key] = [...this.filters[key].filter(h => h.id !== option.id)];
    }
  }

  closeAllDropdowns(): void {
    this.dropdowns.forEach(dropdown => dropdown.isOpen = false);
  }

  clear(): void {
    this.dropdowns.forEach((dropdown) => {
      dropdown.options.forEach((option) => {
        option.checked = false;
      });
    });
    Object.keys(this.filters).forEach(key => {
      this.filters[key] = [];
    });
    this.offerService.setAdvancedFilters(this.filters);
  }

  apply(): void {
    // emit new http request.filtersGrowthRate
    this.offerService.setAdvancedFilters(this.filters);
  }

  getCoreTranslation(key: string): Observable<string> {
    return this.txProvider.getCoreTranslation(key);
  }
}


export interface FilterOption {
  id: number;
  name: string;
  key: string;
}

export enum FiltersArrayKey {
  HABIT = 'type_ids',
  BLOOMING = 'plant_blossom_ids',
  SOIL = 'plant_soil_ids',
  APPLICATION = 'use_ids',
  HABIT_TYPE = 'type_of_habit_ids',
  POSITION = 'position_ids',
  GROWTH_RATE = 'plant_growth_rate_ids',
  SHOW_ONLY = 'show_only_ids'
}