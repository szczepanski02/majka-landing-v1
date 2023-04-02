import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactFormService } from './contact-form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnDestroy {

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
    private contactFormService: ContactFormService
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

  private handleSuccessRes(): void {
    this.form.reset();
  }

}
