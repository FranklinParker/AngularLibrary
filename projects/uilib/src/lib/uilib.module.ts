import { NgModule } from '@angular/core';
import { UilibComponent } from './uilib.component';
import {UilibRoutingModule} from './uilib-routing.module';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [UilibComponent],
  imports: [
    UilibRoutingModule,
    CommonModule
  ],
  exports: [UilibComponent]
})
export class UilibModule { }
