import { Component, OnInit } from '@angular/core';
import {UilibService} from './uilib.service';
import {Observable, of} from 'rxjs';
import {SystemAlert} from './model/SystemAlert';
import {MatDialog} from '@angular/material/dialog';
import {TableDialogComponent} from './table-dialog/table-dialog.component';

@Component({
  selector: 'lib-uilib',
  templateUrl: './uilib.component.html',
  styles: [
  ]
})
export class UilibComponent implements OnInit {
  systemAlerts$: Observable<SystemAlert[]> = of();
  constructor(private uilibService: UilibService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.systemAlerts$ = this.uilibService.getSystemAlerts();
    this.dialog.open(TableDialogComponent,{
      data: this.systemAlerts$,
      width: '40%',
      height: '50%'
    });

  }

}
