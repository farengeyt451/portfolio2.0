import { BehaviorSubject } from 'rxjs';

export class ZenService {
  private zenState = new BehaviorSubject<boolean>(true);
  currentZenState = this.zenState.asObservable();

  changeCurrentZenState(zenState: boolean) {
    this.zenState.next(zenState);
  }
}
