import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ParticlesModule } from 'angular-particle';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page';
import { HomeComponent } from './components/home';

@NgModule({
  declarations: [AppComponent, IndexPageComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ParticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
