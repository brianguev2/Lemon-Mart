import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from '../shared-component.module';
import { UserMaterialModule } from './user-material.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    UserMaterialModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedComponentModule
  ],
  declarations: [ProfileComponent, LogoutComponent]
})
export class UserModule { }
