import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';

export interface RandomUsers {
  results: Array<Contact>;
  info: { seed: string; results: number; page: number; version: string };
}

@Injectable({
  providedIn: 'root'
})
export class ContactlistService {
  constructor(private http: HttpClient) {}

  storeContact(contact: Contact) {
    sessionStorage.setItem('contact', JSON.stringify(contact));
  }

  getContactList(filter): Observable<RandomUsers> {
    return this.http
      .get<RandomUsers>(
        `https://randomuser.me/api/?nat=br&page=${filter.page}&results=${
          filter.results
        }`
      )
      .pipe();
  }
}
