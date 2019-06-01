import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  contactsTitle: string = 'Contacts';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.contactsTitle);
  }
}
