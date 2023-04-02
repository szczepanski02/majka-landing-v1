import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ContactFormService {
  constructor(private http: HttpClient) {}

  sendForm(form: ContactFormModel): Observable<any> {
    return this.http.post<any>(`SEND_FORM_URL`, this.mapToSendModel(form));
  }

  private mapToSendModel(form: ContactFormModel): SendContactFormModel {
    return {
      full_name: form.fullName,
      company: form.company,
      phone_number: form.phoneNumber,
      street: form.street,
      city: form.city,
      email: form.email,
      message: form.message
    }
  }

}

export interface SendContactFormModel {
  full_name: string;
  company: string;
  phone_number: string;
  street: string;
  city: string;
  email: string;
  message: string;
}

export interface ContactFormModel {
  fullName: string;
  company: string;
  phoneNumber: string;
  street: string;
  city: string;
  email: string;
  message: string;
}