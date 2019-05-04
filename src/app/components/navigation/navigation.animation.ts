import { state, style, trigger } from '@angular/animations';

export const toggleMenu = trigger('toggleMenu', [
  state(
    'opened',
    style({
      opacity: 0,
      transform: 'translateX(-25px)'
    })
  ),
  state(
    'closed',
    style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  )
]);