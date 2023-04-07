import { Directive, Input, OnInit } from '@angular/core';
import { DatesLagValue, DatesLagColorRgb } from '../../pages/search/consts/dates-lag.const';

@Directive({
  selector: '[appSearchItemBorderBottomColor]',
  exportAs: 'monthsLagColor',
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
      case (this.monthsLag < DatesLagValue.min):
        this.value = DatesLagColorRgb.min;
        break;
      case (this.monthsLag < DatesLagValue.medium):
        this.value = DatesLagColorRgb.medium;
        break;
      case (this.monthsLag < DatesLagValue.max):
        this.value = DatesLagColorRgb.max;
        break;
      default:
        this.value = DatesLagColorRgb.default;
    }
  }
}
