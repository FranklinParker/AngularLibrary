import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UilibComponent} from './uilib.component';
import {UlibListComponent} from './ulib-list/ulib-list.component';

const routes: Routes = [
  {
    path: '',
    component: UilibComponent
  },
  {
    path: 'list',
    component: UlibListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UilibRoutingModule {
}
