import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeIndexComponent } from './pages/home-index';

const routes: Routes = [
  {
    path: '',
    component: HomeIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule {}
