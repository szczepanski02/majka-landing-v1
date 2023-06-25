import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LangOption } from '../../navbar/lang-selector/lang-selector.component';
import { Language, TranslationsProviderService } from 'src/app/translations-provider.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-lang-selector',
  templateUrl: './mobile-lang-selector.component.html',
  styleUrls: ['./mobile-lang-selector.component.scss']
})
export class MobileLangSelectorComponent implements OnInit {

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
      this.txProvider.lang$.next(Language.EN);
      return;
    }
    if (option.name === 'DE') {
      this.txProvider.lang$.next(Language.DE);
      return;
    }
    if (option.name === 'PL') {
      this.txProvider.lang$.next(Language.PL);
      return;
    }
    if (option.name === 'RU') {
      this.txProvider.lang$.next(Language.RU);
      return;
    }
  }

  close(): void {
    this.isOpen = false;
  }

}
