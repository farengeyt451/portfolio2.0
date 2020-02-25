import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { contacts } from '@fixtures/contacts.fixtures';
import { Contact } from '@interfaces/contacts.interfaces';

@Component({
  selector: 'app-contacts-index',
  templateUrl: './contacts-index.component.html',
  styleUrls: ['./contacts-index.component.sass']
})
export class ContactsIndexComponent implements OnInit {
  contactsTitle: string = 'Contacts';
  contacts: Contact[] = contacts;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.contactsTitle);
  }
}
