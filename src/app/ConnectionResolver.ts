import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SignalR, ISignalRConnection, ConnectionStatus } from 'ng2-signalr';
import { Observable } from 'rxjs';
import { MatSnackBar, SimpleSnackBar, MatSnackBarRef } from '../../node_modules/@angular/material';
import { SignalrService } from './signalr.service';

@Injectable()
export class ConnectionResolver implements Resolve<ISignalRConnection> {
    private _online: boolean = false;
    constructor(private _signalR: SignalR, private _snackBar: MatSnackBar, private _onlineService: SignalrService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        let connection = this._signalR.createConnection();
        connection.errors.subscribe((error) => {
            this._online = false;
            this._onlineService.notifyOnlineStateChanged(new ConnectionStatus(2));
            this._snackBar.open('Error', null, {
                duration: 2000
            });
            let retriveRef = this._snackBar.open('正在重试建立连接...', null, { duration: 0 });
            let timer = setInterval(() => {
                if (this._online) {
                    clearInterval(timer);
                    retriveRef.dismissWithAction();
                } else {
                    connection.start();
                }
            }, 60 * 1000);
        });
        let connectingSnackBarRef: MatSnackBarRef<SimpleSnackBar>;
        connection.status.subscribe((status) => {
            this._onlineService.notifyOnlineStateChanged(status);
            if (status.value === 0) {
                this._online = true;
                connectingSnackBarRef = this._snackBar.open(status.name.toUpperCase());
            } else if (status.value === 1) {
                this._online = true;
                connectingSnackBarRef.dismissWithAction();
                this._snackBar.open(status.name.toUpperCase(), null, { duration: 2000 });
            } else if (status.value === 2) {
                this._online = true;
                connectingSnackBarRef = this._snackBar.open(status.name.toUpperCase());
            } else if (status.value === 3) {
                this._online = false;
                connectingSnackBarRef.dismissWithAction();
                this._snackBar.open(status.name.toUpperCase(), null, { duration: 2000 });
            }
        });
        return connection.start();
    }
}
