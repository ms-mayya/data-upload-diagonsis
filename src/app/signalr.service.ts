import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConnectionStatus } from 'ng2-signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  onlineState: Subject<ConnectionStatus> = new Subject<ConnectionStatus>();
  notifyOnlineStateChanged(online: ConnectionStatus) {
    this.onlineState.next(online);
  }
}
