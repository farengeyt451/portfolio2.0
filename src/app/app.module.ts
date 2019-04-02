import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ParticlesModule } from 'angular-particle';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page';
import { HomeComponent } from './components/home';
import { NavigationComponent } from './components/navigation';
import { PortfolioComponent } from './components/portfolio';
import { SkillsComponent } from './components/skills';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    HomeComponent,
    NavigationComponent,
    PortfolioComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
