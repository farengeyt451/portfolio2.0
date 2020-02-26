import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import OverlayScrollbars from 'overlayscrollbars';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

OverlayScrollbars(document.body, {
  className: 'os-theme-light',
  nativeScrollbarsOverlaid: {
    initialize: false
  },
  scrollbars: {
    autoHide: 'scroll',
    autoHideDelay: 400
  }
});
