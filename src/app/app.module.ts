import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { SignalRModule, SignalRConfiguration } from 'ng2-signalr';
export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'getwayData';
  c.url = 'https://ms-mayya.com:23333/signalr/hubs';
  c.logging = false;
  return c;
}

import { CdkTableModule } from '@angular/cdk/table';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatRippleModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadDataDiagonsisComponent } from './upload-data-diagonsis/upload-data-diagonsis.component';
import { LogComponent } from './log/log.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Base64ToHexPipe } from './base64-to-hex.pipe';
import { LightCodeDirective } from './light-code.directive';
import { FooterComponent } from './footer/footer.component';
import { ConnectionStatusPipe } from './connection-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadDataDiagonsisComponent,
    LogComponent,
    NavbarComponent,
    PageNotFoundComponent,
    Base64ToHexPipe,
    LightCodeDirective,
    FooterComponent,
    ConnectionStatusPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatRippleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AppRoutingModule,
    SignalRModule.forRoot(createConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
