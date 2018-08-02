import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TableRowAnimations } from '../table-row-animations';
import { Log } from '../models/log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  animations: TableRowAnimations
})
export class LogComponent {
  public displayedColumns: string[] = ['#', 'logDate', 'log'];
  public dataSource: MatTableDataSource<Log> = new MatTableDataSource<Log>();
  @Input()
  set logs(logs: Log[]) {
    this.dataSource.data = logs;
  }

  constructor() { }
}
