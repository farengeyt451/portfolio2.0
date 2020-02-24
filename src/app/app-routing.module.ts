import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    path: 'skills',
    loadChildren: () =>
      import('@modules/features/skills/skills.module').then(module => module.SkillsModule)
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
