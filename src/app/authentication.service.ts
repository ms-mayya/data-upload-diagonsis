import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }
  get authenticated(): boolean {
    let answer = localStorage.getItem(':jhh');
    return answer && answer === '1';
  }
  authenticate() {
    localStorage.setItem(':jhh', '1');
  }
}
