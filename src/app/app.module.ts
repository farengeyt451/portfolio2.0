import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { TippyModule } from 'ng-tippy';
import { MatTabsModule } from '@angular/material';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page';
import { HomeComponent } from './components/home';
import { NavigationComponent } from './components/navigation';
import { PortfolioComponent } from './components/portfolio';
import { SkillsComponent } from './components/skills';
import { ContactsComponent } from './components/contacts';
import { MobileNavigationComponent } from './components/mobile-navigation';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    HomeComponent,
    NavigationComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactsComponent,
    MobileNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    ParticlesModule,
    BrowserAnimationsModule,
    SwiperModule,
    TippyModule,
    MatTabsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
