import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ContactsIndexComponent } from './pages/contacts-index';

const routes: Routes = [
  {
    path: '',
    component: ContactsIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class WorksRoutingModule {}
