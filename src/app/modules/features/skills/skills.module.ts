import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MatTabsModule } from '@angular/material/tabs';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { SkillsRoutingModule } from './skills-routing.module';

// Pages
import { SkillsIndexComponent } from './pages/skills-index';

@NgModule({
  imports: [CommonModule, SkillsRoutingModule, MatTabsModule, NgxTippyModule],
  declarations: [SkillsIndexComponent]
})
export class SkillsModule {}
