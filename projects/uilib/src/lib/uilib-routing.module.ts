import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UilibComponent} from './uilib.component';

const routes: Routes = [
  {
    path: '',
    component: UilibComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UilibRoutingModule {
}
