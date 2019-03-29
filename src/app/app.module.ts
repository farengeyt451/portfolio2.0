import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page';

import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [AppComponent, IndexPageComponent],
  imports: [BrowserModule, AppRoutingModule, ParticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
