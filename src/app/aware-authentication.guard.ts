import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { MatDialog } from '../../node_modules/@angular/material';
import { QuestionComponent } from './question/question.component';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AwareAuthenticationGuard implements CanActivate {
  constructor(private _authenticationService: AuthenticationService, private _questionService: MatDialog, private _route: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var canActivate = this._authenticationService.authenticated;
    if (!canActivate) {
      const dialogRef = this._questionService.open(QuestionDialogComponent, { width: '600px', height: '290px' });
      dialogRef.afterClosed().subscribe(result => {
        this._authenticationService.authenticate();
        canActivate = true;
        this._route.navigate(['/home']);
      });
    }
    return canActivate;
  }
}
