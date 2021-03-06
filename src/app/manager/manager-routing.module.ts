import { UserManagementComponent } from './user-management/user-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { Role } from '../auth/role.enum';
import { ViewUserComponent } from '../user/user/view-user/view-user.componet';
import { UserResolve } from '../user/user/user.resolve';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      { path: '', redirectTo: '/manager/home', pathMatch: 'full' },
      {
        path: 'home',
        component: ManagerHomeComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRole: Role.Manager,
        },
      },
      {
        path: 'users',
        component: UserManagementComponent,
        children: [
          {
            path: '',
            component: UserTableComponent,
            outlet: 'master',
          },
          {
            path: 'user',
            component: ViewUserComponent,
            outlet: 'detail',
            resolve: {
              user: UserResolve,
            }
          }
        ],
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
          expectedRole: Role.Manager,
        },
      },
      {
        path: 'receipts',
        component: ReceiptLookupComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRole: Role.Manager,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
