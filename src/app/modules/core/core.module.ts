import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Guards
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

// Components
import { NavigationComponent } from './components/navigation';
import { MobileNavigationComponent } from './components/mobile-navigation';

// Pages
import { IndexPageComponent } from './pages/index-page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IndexPageComponent, NavigationComponent, MobileNavigationComponent],
  imports: [CommonModule, BrowserModule, RouterModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  exports: [IndexPageComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
