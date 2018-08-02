import { Carrier } from './../models/carrier';
import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TableRowAnimations } from '../table-row-animations';

@Component({
  selector: 'app-upload-data-diagonsis',
  templateUrl: './upload-data-diagonsis.component.html',
  styleUrls: ['./upload-data-diagonsis.component.css'],
  animations: TableRowAnimations
})
export class UploadDataDiagonsisComponent {
  public displayedColumns: string[] = ['#', 'uploadedAt', 'sender', 'data', 'city'];
  public dataSource: MatTableDataSource<Carrier> = new MatTableDataSource<Carrier>();
  @Input()
  set carriers(carriers: Carrier[]) {
    this.dataSource.data = carriers;
  }

  constructor() { }
}
