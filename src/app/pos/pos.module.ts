import { MaterialModule } from '../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos/pos.component';

@NgModule({
  imports: [
    CommonModule,
    PosRoutingModule,
    MaterialModule
  ],
  declarations: [PosComponent]
})
export class PosModule { }
