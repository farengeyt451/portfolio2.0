import { Injectable, Inject } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

export interface WindowSize {
  height: number;
  width: number;
}

@Injectable()
export class WindowDimensionsService {
  constructor(@Inject('windowObject') private window: Window) {
    fromEvent(window, 'resize')
      .pipe(
        throttleTime(150),
        map(
          event =>
            <WindowSize>{
              width: (event['currentTarget'] as Window).innerWidth,
              height: (event['currentTarget'] as Window).innerHeight
            }
        )
      )
      .subscribe(windowSize => {
        this.windowSizeChanged.next(windowSize);
      });
  }

  readonly windowSizeChanged = new BehaviorSubject<WindowSize>(<WindowSize>{
    width: this.window.innerWidth,
    height: this.window.innerHeight
  });
}
