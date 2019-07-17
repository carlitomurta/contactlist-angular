import { Component, OnInit } from '@angular/core';
import { ContactlistService } from 'src/app/services/contactlist.service';
import { Contact } from 'src/app/models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contacts: Contact[] = [];
  pagination = { page: 1, results: 10 };
  constructor(
    private router: Router,
    private contactService: ContactlistService
  ) {}

  ngOnInit() {
    this.receiveContacts();
  }

  openContact(contact: Contact) {
    this.contactService.storeContact(contact);
    this.router.navigate(['/detail']);
  }

  loadMore() {
    this.pagination.page += 1;
    this.receiveContacts();
  }

  receiveContacts() {
    this.contactService
      .getContactList(this.pagination)
      .pipe()
      .subscribe(res => {
        this.contacts = [...this.contacts, ...res.results];
      });
  }
}
