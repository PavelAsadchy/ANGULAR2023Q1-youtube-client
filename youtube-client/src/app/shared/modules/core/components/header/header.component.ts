import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output()
  resultListEnabled = new EventEmitter<boolean>();

  enableResultList(isEnabled: boolean) {
    this.resultListEnabled.emit(isEnabled);
  }
}
