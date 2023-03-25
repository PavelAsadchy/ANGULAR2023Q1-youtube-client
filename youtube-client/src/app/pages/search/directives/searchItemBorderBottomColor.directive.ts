import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { DATES_LAG_VALUE, DATES_LAG_COLOR } from '../consts/dates-lag.const';

@Directive({
    selector: '[searchItemBorderBottomColor]'
})
export class SearchItemBorderBottomColorDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) {}

  @Input()
  datesLag!: number;
  borderBottomColor!: string;

  ngOnInit(): void {
    this.setBorderBottomColor();
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'border-bottom',
      `5px solid ${this.borderBottomColor}`
    );
  }

  setBorderBottomColor(): void {
    switch (true) {
      case (this.datesLag < DATES_LAG_VALUE.min):
        this.borderBottomColor = DATES_LAG_COLOR.min;
        break;
      case (this.datesLag < DATES_LAG_VALUE.medium):
        this.borderBottomColor = DATES_LAG_COLOR.medium;
        break;
      case (this.datesLag < DATES_LAG_VALUE.max):
        this.borderBottomColor = DATES_LAG_COLOR.max;
        break;
      default:
        this.borderBottomColor = DATES_LAG_COLOR.default;
    }
  }
}
