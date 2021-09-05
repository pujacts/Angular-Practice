import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string)
  {
    if(username==="puja" && password==='dummy')
    {
      sessionStorage.setItem('autheticateUser', username);
      return true;
    }
    return false;
  }

  isValidUserLogin(){
    let user = sessionStorage.getItem('autheticateUser');
    return !(user===null);
  }
}
