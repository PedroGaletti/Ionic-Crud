import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  constructor(public http: Http) {

  }

  register(data) {
    return new Promise((resolve,reject) => {
      let header = new Headers(); 
      header.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/login/', JSON.stringify(data), {headers: header})
      .map(res => res.json())
      .subscribe(_data => {
        resolve(_data);
      }, err => {
        reject(err);
      })
    })
  }

  getAuth() {
    return new Promise((resolve,reject) => {
      let header = new Headers();
      header.append('Content-Type', 'application/json'); 
     
      this.http.get('http://localhost:8080/login/auth', {headers: header})
      .map(res => res.json())
      .subscribe(_data => {
        resolve(_data);
      }, err => {
        reject(err);
      })
    })
  }

}
