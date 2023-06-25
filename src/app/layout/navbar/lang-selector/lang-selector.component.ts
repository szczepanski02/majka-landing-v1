import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Option } from 'src/app/components/dropdown/dropdown.component';
import { Language, TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent implements OnInit, OnDestroy {

  options: LangOption[] = [
    { name: 'EN', flag: 'en.svg' },
    { name: 'PL', flag: 'pl.svg' },
    { name: 'DE', flag: 'de.svg' },
    { name: 'RU', flag: 'ru.svg' },
  ];

  @ViewChild('dropdown', { static: true }) dropdownElement!: ElementRef;

  selectedOption: LangOption | null = null;
  isOpen: boolean = false;

  private subs = new Subscription();

  constructor(
    private readonly host: ElementRef,
    private txProvider: TranslationsProviderService,
  ) {
    this.subs.add(this.txProvider.lang$.subscribe(lang => {
      const langOption = this.options.find(opt => opt.name.toLowerCase() === lang.toLowerCase());
      if (langOption !== undefined) {
        this.selectedOption = langOption;
      }
    }));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.host.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onOptionClick(option: LangOption) {
    this.selectedOption = option;
    this.isOpen = false;
    if (option.name === 'EN') {
      this.txProvider.setCurrentAppLang(Language.EN);
      return;
    }
    if (option.name === 'DE') {
      this.txProvider.setCurrentAppLang(Language.DE);
      return;
    }
    if (option.name === 'PL') {
      this.txProvider.setCurrentAppLang(Language.PL);
      return;
    }
    if (option.name === 'RU') {
      this.txProvider.setCurrentAppLang(Language.RU);
      return;
    }
  }

  close(): void {
    this.isOpen = false;
  }

}

export interface LangOption {
  name: string;
  flag: string;
}
