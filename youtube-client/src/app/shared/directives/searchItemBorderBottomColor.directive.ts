import { Directive, Input, OnInit } from '@angular/core';
import { DATES_LAG_VALUE, DATES_LAG_COLOR } from '../../pages/search/consts/dates-lag.const';

@Directive({
  selector: '[searchItemBorderBottomColor]',
  exportAs: 'monthsLagColor'
})
export class SearchItemBorderBottomColorDirective implements OnInit {
  @Input()
  monthsLag!: number;

  borderBottomColor!: string;

  ngOnInit(): void {
    this.setBorderBottomColor();
  }

  setBorderBottomColor(): void {
    switch (true) {
      case (this.monthsLag < DATES_LAG_VALUE.min):
        this.borderBottomColor = DATES_LAG_COLOR.min;
        break;
      case (this.monthsLag < DATES_LAG_VALUE.medium):
        this.borderBottomColor = DATES_LAG_COLOR.medium;
        break;
      case (this.monthsLag < DATES_LAG_VALUE.max):
        this.borderBottomColor = DATES_LAG_COLOR.max;
        break;
      default:
        this.borderBottomColor = DATES_LAG_COLOR.default;
    }
  }
}
