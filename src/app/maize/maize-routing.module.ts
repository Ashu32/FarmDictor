import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaizePage } from './maize.page';

const routes: Routes = [
  {
    path: '',
    component: MaizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaizePageRoutingModule {}
