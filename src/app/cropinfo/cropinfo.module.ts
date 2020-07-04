import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropinfoPageRoutingModule } from './cropinfo-routing.module';

import { CropinfoPage } from './cropinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropinfoPageRoutingModule
  ],
  declarations: [CropinfoPage]
})
export class CropinfoPageModule {}
