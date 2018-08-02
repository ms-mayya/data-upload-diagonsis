import { Component } from '@angular/core';
import { SignalrService } from '../signalr.service';
import { ConnectionStatus } from 'ng2-signalr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  online: boolean;
  constructor(private _onlineService: SignalrService) {
    this._onlineService.onlineState.subscribe((state: ConnectionStatus) => {
      this.online = state.value === 1;
    });
  }
}
