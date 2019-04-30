import { state, style, trigger, animate, transition } from '@angular/animations';

export const showHero = trigger('showHero', [
  state(
    'hidden',
    style({
      opacity: 0
    })
  ),
  state(
    'showen',
    style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  )
]);
