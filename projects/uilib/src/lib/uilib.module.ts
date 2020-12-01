import { NgModule } from '@angular/core';
import { UilibComponent } from './uilib.component';
import {UilibRoutingModule} from './uilib-routing.module';



@NgModule({
  declarations: [UilibComponent],
  imports: [
    UilibRoutingModule
  ],
  exports: [UilibComponent]
})
export class UilibModule { }
