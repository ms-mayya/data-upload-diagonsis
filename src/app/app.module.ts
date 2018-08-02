import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { SignalRModule, SignalRConfiguration } from 'ng2-signalr';
export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'getwayData';
  c.url = 'http://221.226.80.114:23333/signalr/hubs';
  c.logging = false;
  return c;
}

import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadDataDiagonsisComponent } from './upload-data-diagonsis/upload-data-diagonsis.component';
import { LogComponent } from './log/log.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationService } from './authentication.service';
import { AwareAuthenticationGuard } from './aware-authentication.guard';
import { QuestionComponent } from './question/question.component';
import { Base64ToHexPipe } from './base64-to-hex.pipe';
import { LightCodeDirective } from './light-code.directive';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
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
    QuestionComponent,
    Base64ToHexPipe,
    LightCodeDirective,
    QuestionDialogComponent,
    FooterComponent,
    ConnectionStatusPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    AppRoutingModule,
    SignalRModule.forRoot(createConfig)
  ],
  entryComponents: [
    QuestionComponent,
    QuestionDialogComponent
  ],
  exports: [
    QuestionComponent,
    QuestionDialogComponent
  ],
  providers: [AuthenticationService, AwareAuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
