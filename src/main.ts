import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import OverlayScrollbars from 'overlayscrollbars';

import * as WebFont from 'webfontloader';

if (environment.production) {
  enableProdMode();
}

// Init app
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Init custom scrollbar
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

// Init webfontloader
WebFont.load({
  custom: {
    families: ['Montserrat', 'OpenSans']
  }
});
