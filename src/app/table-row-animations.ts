import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

export const TableRowAnimations = [
  trigger('jackInOutTheBox', [
    state('in', style({ opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom' })),
    transition('void => *', [
      animate(300, keyframes([
        style({ opacity: 0, transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom' }),
        style({ transform: 'rotate(-10deg)' }),
        style({ transform: 'rotate(3deg)' }),
        style({ opacity: 1, transform: 'scale(1)' })
      ]))
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'translateX(100%)' }))
    ])
  ])
];

/*
@keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
*/