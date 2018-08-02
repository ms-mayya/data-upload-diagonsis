import { Component } from '@angular/core';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  online: boolean;
  constructor(private _onlineService: SignalrService) {
    this._onlineService.onlineState.subscribe((state) => {
      this.online = state;
    });
  }
}
