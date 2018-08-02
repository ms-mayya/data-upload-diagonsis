import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SignalR, ISignalRConnection } from 'ng2-signalr';
import { Observable } from 'rxjs';
import { MatSnackBar } from '../../node_modules/@angular/material';
import { SignalrService } from './signalr.service';

@Injectable()
export class ConnectionResolver implements Resolve<ISignalRConnection> {
    constructor(private _signalR: SignalR, private _snackBar: MatSnackBar, private _onlineService: SignalrService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        let connection = this._signalR.createConnection();
        connection.errors.subscribe((error) => {
            this._onlineService.notifyOnlineStateChanged(false);
            this._snackBar.open(error.toUpperCase(), 'Error', {
                duration: 2000
            });
        });
        connection.status.subscribe((status) => {
            this._onlineService.notifyOnlineStateChanged(true);
            this._snackBar.open(status.name.toUpperCase(), 'OK', {
                duration: 2000
            });
        });
        return connection.start();
    }
}
