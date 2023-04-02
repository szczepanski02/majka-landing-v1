import { trigger, state, style, transition, animate, group } from '@angular/animations';

export const AccordionAnimations = [
  trigger('slideInOut', [
      state('in', style({
          'max-height': '500px', 'opacity': '1', 'visibility': 'visible', 'padding-bottom': '20px'
      })),
      state('out', style({
          'max-height': '0px', 'opacity': '0', 'visibility': 'hidden', 'padding-bottom': '0'
      })),
      transition('in => out', [group([
          animate('100ms ease-in-out', style({
              'opacity': '0',
              'padding-bottom': '20px'
          })),
          animate('200ms ease-in-out', style({
              'max-height': '0px',
              'padding-bottom': '10px'
          })),
          animate('300ms ease-in-out', style({
              'visibility': 'hidden',
              'padding-bottom': '0'
          }))
      ]
      )]),
      transition('out => in', [group([
          animate('1ms ease-in-out', style({
              'visibility': 'visible',
              'padding-bottom': '0'
          })),
          animate('200ms ease-in-out', style({
              'max-height': '500px',
              'padding-bottom': '10px'
          })),
          animate('400ms ease-in-out', style({
              'opacity': '1',
              'padding-bottom': '20px'
          }))
      ]
      )])
  ]),
]
