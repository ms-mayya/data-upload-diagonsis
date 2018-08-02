import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64ToHex'
})
export class Base64ToHexPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.base64toHEX(value);
  }

  private base64toHEX(base64) {
    var raw = atob(base64);
    var HEX = '';
    for (let i = 0; i < raw.length; i++) {
      var _hex = raw.charCodeAt(i).toString(16)
      HEX += (_hex.length == 2 ? _hex : '0' + _hex);
    }
    return HEX.toUpperCase();
  }

}
