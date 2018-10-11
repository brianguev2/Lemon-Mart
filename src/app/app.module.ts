import { AuthGuard } from './auth/auth-guard.service';
import { UiService } from './common/ui.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { SimpleDialogComponent } from './common/simple-dialog/simple-dialog.component';
import { AuthHttpInterceptor } from './auth/auth-http-interceptor';
import { NavigationMenuComponent } from './user/navigation-menu/navigation-menu.component';
import { SharedComponentModule } from './shared-component.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SimpleDialogComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentModule
  ],
  providers: [AuthService, UiService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
      },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
