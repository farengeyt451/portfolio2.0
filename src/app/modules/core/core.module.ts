import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// Guards
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

// Components

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
