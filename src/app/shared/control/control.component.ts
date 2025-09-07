import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, ElementRef, HostListener, Input, ViewEncapsulation, /*HostBinding*/ } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { 
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  @Input({required: true}) title: string = '';
  // @HostBinding('class') className = "control"; -- deprecated, prefer host in @Component
  // @HostListener('click')  onClick() { console.log('ControlComponent clicked'); }

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  constructor() {
    afterRender(() => {
      console.log('afterRender() called');
    });
    afterNextRender(() => {
      console.log('afterNextRender() called');
    });
  }

  ngAfterContentInit(): void {
    console.log('ControlComponent content initialized: ', this.control);
  }
  
  onClick() {
    console.log('ControlComponent clicked');
    console.log('ControlComponent control: ', this.control);
  }
}
