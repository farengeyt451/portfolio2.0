import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { SkillsIndexComponent } from './pages/skills-index';

const routes: Routes = [
  {
    path: '',
    component: SkillsIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SkillsRoutingModule {}
