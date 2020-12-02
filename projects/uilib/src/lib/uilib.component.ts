import { Component, OnInit } from '@angular/core';
import {UilibService} from './uilib.service';
import {Observable, of} from 'rxjs';
import {SystemAlert} from './model/SystemAlert';

@Component({
  selector: 'lib-uilib',
  templateUrl: './uilib.component.html',
  styles: [
  ]
})
export class UilibComponent implements OnInit {
  systemAlerts$: Observable<SystemAlert[]> = of();
  constructor(private uilibService: UilibService) { }

  ngOnInit(): void {
    this.systemAlerts$ = this.uilibService.getSystemAlerts();
  }

}
