import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './components/skills';
import { ContactsComponent } from './components/contacts';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@modules/features/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'works',
    loadChildren: () =>
      import('@modules/features/works/works.module').then(module => module.WorksModule)
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'portfolio',
  //   component: PortfolioComponent
  // },
  // {
  //   path: 'skills',
  //   component: SkillsComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
