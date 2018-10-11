import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './app-material.module';
import { ViewUserComponent } from './user/user/view-user/view-user.componet';

@NgModule({
imports: [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  MaterialModule,
],
declarations: [ViewUserComponent],
exports: [ViewUserComponent]
})
export class SharedComponentModule {}
