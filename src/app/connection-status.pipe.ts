import { Pipe, PipeTransform } from '@angular/core';
import { ConnectionStatus } from 'ng2-signalr';

@Pipe({
  name: 'connectionStatus'
})
export class ConnectionStatusPipe implements PipeTransform {

  transform(value: ConnectionStatus, args?: any): boolean {
    return value.value === 0;
  }

}
