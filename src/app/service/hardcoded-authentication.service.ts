import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: any, password: any){
    //console.log('before' + this.isUserLoggedIn());
    if(username==='Ahmad' && password==='dummy'){
      sessionStorage.setItem('authenticatedUser',username);
      //console.log('after' + this.isUserLoggedIn());
      return true;
    }
    return false;

  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}

