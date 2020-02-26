import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
    path: 'contacts',
    loadChildren: () =>
      import('@modules/features/contacts/contacts.module').then(module => module.ContactsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
