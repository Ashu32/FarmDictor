import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SugarcanePage } from './sugarcane.page';

const routes: Routes = [
  {
    path: '',
    component: SugarcanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SugarcanePageRoutingModule {}
