import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class ShowDetailsDirectiveDirective {

  @Input() tooltip;

  constructor() { }

  @HostListener('focusin', ['$event', '$target'])
  @HostListener('mouseenter', ['$event', '$target'])
  show(event) {
//    console.log('mouse entered = ' + event);
    event.target.className = event.target.className.replace(' hover', '').replace(' normal', '') + ' hover';
  }

  @HostListener('focusout', ['$event', '$target'])
  @HostListener('mouseleave', ['$event', '$target'])
  hide(event) {
//    console.log('mouse left');
    event.target.className = event.target.className.replace(' hover', '').replace(' normal', '') + ' normal';
  }

}
