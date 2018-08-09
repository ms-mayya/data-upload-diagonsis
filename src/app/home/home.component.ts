import { Carrier } from './../models/carrier';
import { ActivatedRoute } from '@angular/router';
import { ISignalRConnection, BroadcastEventListener } from 'ng2-signalr';
import { Component, OnInit, Output } from '@angular/core';
import { Log } from '../models/log';

declare var $: any;

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this._connection = this.route.snapshot.data['connection'];
    const onLog$ = new BroadcastEventListener<string>('log');
    const onDataUploaded$ = new BroadcastEventListener<any>('dataUploaded');
    onLog$.subscribe((log: string) => {
      const getwayId = (/\[\d+\]/g.exec(log) || [''])[0];
      log = log.replace(getwayId, '');
      const code = (/\[.+\]/g.exec(log) || [''])[0];
      log = log.replace(code, '');
      this.logs.splice(0, 0, new Log(log, code, getwayId));
      this.logs = ([]).concat(this.logs);
    });
    onDataUploaded$.subscribe((carrier: Carrier) => {
      this.carriers.splice(0, 0, carrier);
      this.carriers = ([]).concat(this.carriers);
    });
    this._connection.listen(onLog$);
    this._connection.listen(onDataUploaded$);

    this.createNivoSliderScript();
  }

  createNivoSliderScript() {
    if ($) {
      if (!document.getElementById('nivo-slider')) {
        const nivoSliderScript = document.createElement('script');
        nivoSliderScript.id = 'nivo-slider';
        nivoSliderScript.src = 'https://cdn.bootcss.com/jquery-nivoslider/3.2/jquery.nivo.slider.min.js';
        document.body.appendChild(nivoSliderScript);
      }
      if (!document.getElementById('nivo-slider-pack')) {
        const nivoSliderPackScript = document.createElement('script');
        nivoSliderPackScript.id = 'nivo-slider-pack';
        nivoSliderPackScript.src = 'https://cdn.bootcss.com/jquery-nivoslider/3.2/jquery.nivo.slider.pack.min.js';
        document.body.appendChild(nivoSliderPackScript);
      }
    }
  }

}
