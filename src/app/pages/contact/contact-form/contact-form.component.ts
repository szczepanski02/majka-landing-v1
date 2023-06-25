import { Component, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactFormService } from './contact-form.service';
import { Observable, Subscription } from 'rxjs';
import { PageSection, TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnDestroy {

  @Input() section!: PageSection;

  private subs = new Subscription();

  form: FormGroup = this._formBuilder.group({
    fullName: [''],
    company: [''],
    phone: [''],
    street: [''],
    city: [''],
    email: [''],
    message: ['']
  });

  constructor(
    private _formBuilder: FormBuilder,
    private contactFormService: ContactFormService,
    private txProvider: TranslationsProviderService,
  ) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  send(): void {
    this.contactFormService.sendForm(this.form.value)
      .subscribe({
        next: () => this.handleSuccessRes(),
        error: (error) => console.error(error)
      });
  }

  getTranslation(key: string): Observable<string> {
    return this.txProvider.getCoreTranslation(key);
  }

  private handleSuccessRes(): void {
    this.form.reset();
  }

}
