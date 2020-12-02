import {NgModule} from '@angular/core';
import {UilibComponent} from './uilib.component';
import {UilibRoutingModule} from './uilib-routing.module';
import {CommonModule} from '@angular/common';
import {UlibListComponent} from './ulib-list/ulib-list.component';


@NgModule({
  declarations: [
    UilibComponent,
    UlibListComponent
  ],
  imports: [
    UilibRoutingModule,
    CommonModule
  ],
  exports: [
    UilibComponent,
    UlibListComponent
  ]
})
export class UilibModule {
}
