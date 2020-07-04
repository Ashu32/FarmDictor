import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WheatPage } from './wheat.page';

const routes: Routes = [
  {
    path: '',
    component: WheatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WheatPageRoutingModule {}
