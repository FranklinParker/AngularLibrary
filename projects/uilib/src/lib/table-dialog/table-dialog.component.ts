import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Observable, of} from 'rxjs';
import { SystemAlert} from '../model/SystemAlert';

@Component({
  selector: 'lib-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss']
})
export class TableDialogComponent implements OnInit {

  systemAlerts$: Observable<SystemAlert[]> = of();
  constructor(public dialogRef: MatDialogRef<TableDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: Observable<SystemAlert[]> ) {
    this.systemAlerts$ = data;
  }

  ngOnInit(): void {
  }

}
