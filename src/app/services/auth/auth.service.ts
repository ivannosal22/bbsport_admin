import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient: HttpClient) { }

  /**
   * Documentation
   * @method { login service for get credentials and permission}
   * @memberof AuthService
   * @param  { EmailId, Password }
   * @returns cookie tokens, user roles & permission 
   * @author fayiz
   */
  login() {

  }

}
