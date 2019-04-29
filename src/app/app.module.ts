import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ParticlesModule } from 'angular-particle';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { TippyModule } from 'ng-tippy';
import { MatTabsModule } from '@angular/material';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page';
import { HomeComponent } from './components/home';
import { NavigationComponent } from './components/navigation';
import { PortfolioComponent } from './components/portfolio';
import { SkillsComponent } from './components/skills';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    HomeComponent,
    NavigationComponent,
    PortfolioComponent,
    SkillsComponent,
    PageLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    BrowserAnimationsModule,
    SwiperModule,
    TippyModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
