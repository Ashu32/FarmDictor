import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WheatPageRoutingModule } from './wheat-routing.module';

import { WheatPage } from './wheat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WheatPageRoutingModule
  ],
  declarations: [WheatPage]
})
export class WheatPageModule {}
