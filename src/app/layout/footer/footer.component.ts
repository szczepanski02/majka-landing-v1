import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Subscription, first } from 'rxjs';
import { ContactFormService } from 'src/app/pages/contact/contact-form/contact-form.service';
import { TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnDestroy {

  emailControl = new FormControl('', [Validators.email, Validators.required]);

  private subs = new Subscription();

  constructor(
    private txProvider: TranslationsProviderService,
    private contactProvider: ContactFormService,
  ) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getTranslation(key: string): Observable<string> {
    return this.txProvider.getCoreTranslation(key);
  }

  newsletter(): void {
    if (this.emailControl.valid) {
      this.subs.add(this.contactProvider.sendNewsletter(this.emailControl.value!)
        .pipe(first())
        .subscribe());
    }
  }

}
