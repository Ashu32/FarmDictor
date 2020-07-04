import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoiltestingPageRoutingModule } from './soiltesting-routing.module';

import { SoiltestingPage } from './soiltesting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoiltestingPageRoutingModule
  ],
  declarations: [SoiltestingPage]
})
export class SoiltestingPageModule {}
