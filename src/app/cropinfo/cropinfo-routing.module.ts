import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropinfoPage } from './cropinfo.page';

const routes: Routes = [
  {
    path: '',
    component: CropinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropinfoPageRoutingModule {}
