import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { WorksRoutingModule } from './contacts-routing.module';
import { InlineSVGModule } from 'ng-inline-svg';

// Pages
import { ContactsIndexComponent } from './pages/contacts-index';

// Components
import { ContactsItemComponent } from './components/contacts-item';

@NgModule({
  imports: [CommonModule, WorksRoutingModule, InlineSVGModule.forRoot()],
  declarations: [ContactsIndexComponent, ContactsItemComponent]
})
export class ContactsModule {}
