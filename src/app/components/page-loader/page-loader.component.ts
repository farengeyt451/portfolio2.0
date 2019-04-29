import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-page-loader',
  template: '<div></div>'
})
export class PageLoaderComponent {
  private _options: Object;
  private _revealer;
}
