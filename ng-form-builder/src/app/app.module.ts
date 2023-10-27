import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { HeaderComponent } from './header/header.component';
import { NumberComponent } from './number/number.component';
import { DrawerComponent } from './drawer/drawer.component';


import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmailComponent,
    PasswordComponent,
    NumberComponent,
    DrawerComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
