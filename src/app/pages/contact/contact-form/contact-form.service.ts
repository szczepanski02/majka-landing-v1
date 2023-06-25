import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  constructor(private http: HttpClient) {}

  sendForm(form: ContactFormModel): Observable<any> {
    return this.http.post<any>(`${API_URL}/send_message`, this.mapToSendModel(form));
  }

  sendNewsletter(email: string): Observable<any> {
    return this.http.post<any>(`${API_URL}/newsletter`, { email });
  }

  private mapToSendModel(form: ContactFormModel): SendContactFormModel {
    return {
      name: form.fullName,
      company: form.company,
      phone: form.phoneNumber,
      street: form.street,
      city: form.city,
      email: form.email,
      message: form.message
    }
  }

}

export interface SendContactFormModel {
  name: string;
  company: string;
  phone: string;
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