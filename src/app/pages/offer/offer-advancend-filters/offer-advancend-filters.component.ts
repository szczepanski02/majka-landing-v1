import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { FILTERS_HABIT, MOCKED_FILTERS } from './offer-advanced-filters.const';
import { DropdownComponent, Option } from 'src/app/components/dropdown/dropdown.component';
import { AdvancedFiltersModel, OfferService } from '../offer.service';

@Component({
  selector: 'app-offer-advancend-filters',
  templateUrl: './offer-advancend-filters.component.html',
  styleUrls: ['./offer-advancend-filters.component.scss']
})
export class OfferAdvancendFiltersComponent {

  @ViewChildren(DropdownComponent) dropdowns!: QueryList<DropdownComponent>;

  public FiltersArrayKey = FiltersArrayKey;

  @Input() isOpen!: boolean;

  filtersHabit = FILTERS_HABIT.map(option => ({...option}));
  filtersBlooming = MOCKED_FILTERS.map(option => ({...option}));
  filtersSoil = MOCKED_FILTERS.map(option => ({...option}));
  filtersApplication = MOCKED_FILTERS.map(option => ({...option}));
  filtersMaxHeight = MOCKED_FILTERS.map(option => ({...option}));
  filtersPosition = MOCKED_FILTERS.map(option => ({...option}));
  filtersGrowthRate = MOCKED_FILTERS.map(option => ({...option}));
  filtersShowOnly = MOCKED_FILTERS.map(option => ({...option}));

  filters: AdvancedFiltersModel = {
    [FiltersArrayKey.HABIT]: [],
    [FiltersArrayKey.BLOOMING]: [],
    [FiltersArrayKey.SOIL]: [],
    [FiltersArrayKey.APPLICATION]: [],
    [FiltersArrayKey.MAX_HEIGHT]: [],
    [FiltersArrayKey.POSITION]: [],
    [FiltersArrayKey.GROWTH_RATE]: [],
    [FiltersArrayKey.SHOW_ONLY]: [],
  }

  constructor(private offerService: OfferService) { }

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
  }

  apply(): void {
    // emit new http request
    this.offerService.setAdvancedFilters(this.filters);
  }
}


export interface FilterOption {
  id: number;
  name: string;
  key: string;
}

export enum FiltersArrayKey {
  HABIT = 'habit',
  BLOOMING = 'blooming',
  SOIL = 'soil',
  APPLICATION = 'application',
  MAX_HEIGHT = 'max_height',
  POSITION = 'position',
  GROWTH_RATE = 'growth_rate',
  SHOW_ONLY = 'show_only'
}