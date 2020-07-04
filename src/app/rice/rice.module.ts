import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RicePageRoutingModule } from './rice-routing.module';

import { RicePage } from './rice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RicePageRoutingModule
  ],
  declarations: [RicePage]
})
export class RicePageModule {}
