import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { WorksIndexComponent } from './pages/works-index';

const routes: Routes = [
  {
    path: '',
    component: WorksIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class WorksRoutingModule {}
