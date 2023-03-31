import { Component } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { SelectedItemService } from 'src/app/shared/services/selected-item.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(
    public selectedItemService: SelectedItemService,
    private navigateService: NavigateService
  ) { }

  returnToSearchResults(): void {
    this.selectedItemService.clearSelected();
    this.navigateService.goTo(['/search']);
  }
}
