import { Component } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  constructor(public authService: AuthService) { }
}
