import { Carrier } from './../models/carrier';
import { ActivatedRoute } from '@angular/router';
import { ISignalRConnection, BroadcastEventListener, ConnectionStatus } from 'ng2-signalr';
import { Component, OnInit, Output } from '@angular/core';
import { Log } from '../models/log';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'TCP Diagonsis Platform';
  @Output() logs: Log[] = [];
  @Output() carriers: Carrier[] = [];
  private _connection: ISignalRConnection;

  constructor(private route: ActivatedRoute, private onlineService: SignalrService) { }

  ngOnInit() {
    this._connection = this.route.snapshot.data['connection'];
    const onLog$ = new BroadcastEventListener<string>('log');
    const onDataUploaded$ = new BroadcastEventListener<any>('dataUploaded');
    onLog$.subscribe((log: string) => {
      const code = /\[.+\]/.exec(log)[0];
      log = log.replace(code, '');
      this.logs.splice(0, 0, new Log(log, code));
      this.logs = ([]).concat(this.logs);
    });
    onDataUploaded$.subscribe((carrier: Carrier) => {
      this.carriers.splice(0, 0, carrier);
      this.carriers = ([]).concat(this.carriers);
    });
    this._connection.listen(onLog$);
    this._connection.listen(onDataUploaded$);
  }
}
