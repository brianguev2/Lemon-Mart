import { UserResolve } from './../user/user/user.resolve';
import { UserService } from './../user/user/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { MaterialModule } from '../app-material.module';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { UserTableComponent } from './user-table/user-table.component';
import { ManagerMaterialModule } from './manager-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedComponentModule } from '../shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule,
    ManagerMaterialModule,
    SharedComponentModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagementComponent, ReceiptLookupComponent, UserTableComponent],
  providers: [AuthGuard, AuthService, UserService, UserResolve],
})
export class ManagerModule { }
