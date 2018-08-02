import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  onlineState: Subject<boolean> = new Subject<boolean>();
  notifyOnlineStateChanged(online: boolean) {
    this.onlineState.next(online);
  }
}
