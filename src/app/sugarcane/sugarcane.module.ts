import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugarcanePageRoutingModule } from './sugarcane-routing.module';

import { SugarcanePage } from './sugarcane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugarcanePageRoutingModule
  ],
  declarations: [SugarcanePage]
})
export class SugarcanePageModule {}
