import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, first } from 'rxjs';
import { ContactPersonModel, TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-contact-persons',
  templateUrl: './contact-persons.component.html',
  styleUrls: ['./contact-persons.component.scss']
})
export class ContactPersonsComponent implements OnInit, OnDestroy {

  contacts: ContactPersonModel[] = [];

  private subs = new Subscription();

  constructor(private txProvider: TranslationsProviderService) {
    this.subs.add(this.txProvider.lang$
      .subscribe(lang => this.loadContacts(lang)));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private loadContacts(lang: string): void {
    this.subs.add(this.txProvider.getContacts(lang)
      .pipe(first())
      .subscribe(contacts => this.contacts = contacts));
  }

}
