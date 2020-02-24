import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
// import { MatTabsModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page';
import { NavigationComponent } from './components/navigation';
import { SkillsComponent } from './components/skills';
import { ContactsComponent } from './components/contacts';
import { MobileNavigationComponent } from './components/mobile-navigation';
import { CoreModule } from '@modules/core/core.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavigationComponent,
    SkillsComponent,
    ContactsComponent,
    MobileNavigationComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    InlineSVGModule.forRoot()

    // MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
