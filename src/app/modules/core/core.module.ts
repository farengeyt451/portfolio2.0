import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// Guards
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

// Components
import { NavigationComponent } from './components/navigation';
import { MobileNavigationComponent } from './components/mobile-navigation';

// Pages
import { MainPageComponent } from './pages/main-page';

// Service
import { DataService } from './services/data.service';

@NgModule({
  declarations: [MainPageComponent, NavigationComponent, MobileNavigationComponent],
  imports: [CommonModule, BrowserModule, RouterModule, BrowserAnimationsModule, HttpClientModule],
  providers: [DataService],
  exports: [MainPageComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
