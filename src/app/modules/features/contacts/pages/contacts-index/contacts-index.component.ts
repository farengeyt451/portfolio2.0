import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Contact } from '@interfaces/contacts.interfaces';
import { DataService } from '@modules/core/services/data.service';

@Component({
  selector: 'app-contacts-index',
  templateUrl: './contacts-index.component.html',
  styleUrls: ['./contacts-index.component.sass']
})
export class ContactsIndexComponent implements OnInit {
  contactsTitle: string = 'Contacts';
  contacts: Contact[];

  constructor(private titleService: Title, private dataService: DataService) {}

  ngOnInit() {
    this.titleService.setTitle(this.contactsTitle);
    this.getItems();
  }

  getItems() {
    this.dataService.getData('contacts').subscribe(
      (data: { contacts: Contact[] }) => {
        this.contacts = data.contacts;
      },
      error => {
        console.error(error);
      }
    );
  }
}
