import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaizePageRoutingModule } from './maize-routing.module';

import { MaizePage } from './maize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaizePageRoutingModule
  ],
  declarations: [MaizePage]
})
export class MaizePageModule {}
