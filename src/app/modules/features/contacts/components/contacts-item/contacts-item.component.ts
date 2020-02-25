import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '@interfaces/contacts.interfaces';

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.sass']
})
export class ContactsItemComponent implements OnInit {
  @Input() contactData: Contact;
  customClass: string;

  constructor() {}

  ngOnInit() {
    this.setClassModifier();
  }

  setClassModifier() {
    this.customClass = `contacts-item__icon--${this.contactData.name}`;
  }
}
