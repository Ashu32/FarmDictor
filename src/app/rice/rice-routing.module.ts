import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RicePage } from './rice.page';

const routes: Routes = [
  {
    path: '',
    component: RicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RicePageRoutingModule {}
