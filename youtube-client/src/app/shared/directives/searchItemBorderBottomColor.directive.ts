import { Directive, Input, OnInit } from '@angular/core';
import { DATES_LAG_VALUE, DATES_LAG_COLOR_RGB } from '../../pages/search/consts/dates-lag.const';

@Directive({
  selector: '[searchItemBorderBottomColor]',
  exportAs: 'monthsLagColor'
})
export class SearchItemBorderBottomColorDirective implements OnInit {
  @Input()
  monthsLag!: number;

  value!: string;

  ngOnInit(): void {
    this.setBorderBottomColor();
  }

  setBorderBottomColor(): void {
    switch (true) {
      case (this.monthsLag < DATES_LAG_VALUE.min):
        this.value = DATES_LAG_COLOR_RGB.min;
        break;
      case (this.monthsLag < DATES_LAG_VALUE.medium):
        this.value = DATES_LAG_COLOR_RGB.medium;
        break;
      case (this.monthsLag < DATES_LAG_VALUE.max):
        this.value = DATES_LAG_COLOR_RGB.max;
        break;
      default:
        this.value = DATES_LAG_COLOR_RGB.default;
    }
  }
}
