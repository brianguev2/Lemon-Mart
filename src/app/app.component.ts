import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary" fxLayoutGap="8px">
  <button mat-icon-button><mat-icon>menu</mat-icon></button>
  <a mat-icon-button routerLink="/home"><mat-icon svgIcon="squeezer"></mat-icon><span class="mat-h2">LemonMart</span></a>
  <span class="flex-spacer"></span>
  <button mat-mini-fab routerLink="/user/profile" matTooltip="Profile" aria-label="User Profile"><mat-icon>account_circle</mat-icon>
  </button>
  <button mat-mini-fab routerLink="/user/logout" matTooltip="Logout" aria-label="Logout"><mat-icon>lock_open</mat-icon></button>
</mat-toolbar>
<router-outlet></router-outlet>

  <!-- <div>Icons made by <a href="http://www.freepik.com"
  title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
  title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
  title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> --> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'squeezer',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/squeezer.svg')
    );
  }
}
