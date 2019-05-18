import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class NavigationService {
  private menuState = new BehaviorSubject<string>('opened');

  currentMenuState = this.menuState.asObservable();

  changeMenuState(state: string) {
    this.menuState.next(state);
  }
}
