import {NgModule} from '@angular/core';
import {UilibComponent} from './uilib.component';
import {UilibRoutingModule} from './uilib-routing.module';
import {CommonModule} from '@angular/common';
import {UlibListComponent} from './ulib-list/ulib-list.component';
import { TableDialogComponent } from './table-dialog/table-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    UilibComponent,
    UlibListComponent,
    TableDialogComponent
  ],
  imports: [
    UilibRoutingModule,
    CommonModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports: [
    UilibComponent,
    UlibListComponent
  ]
})
export class UilibModule {
}
