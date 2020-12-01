import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'uilib',
    loadChildren: () => import('../../projects/uilib/src/lib/uilib.module').then(m => m.UilibModule),
    data: {animation: {page: 'vendorReviewsHome'}},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
