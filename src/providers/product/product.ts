import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
// import { AppConfig } from '../app-config.provider';

@Injectable()
export class ProductProvider {

  constructor(public http: Http) {

  }

  add(data) {
    //promise é que ele vai retornar ( uma garantia, uma promessa ) de qualquer forma o que ele pegar dentro dessa função sendo esse retorno uma
    //resolução ou uma rejeição
    return new Promise((resolve,reject) => {
      let header = new Headers(); // adicionando cabeçalho
      header.append('Content-Type', 'application/json'); // definindo o jeito que será apresentado o nosso modelo de enviar os dados para o servidor.
      // que no caso definimos que será um json.

      //caminho para onde estou mandando, dados que estou mandandno, cabeçalho da minha pagina
      this.http.post('http://localhost:8080/produto', JSON.stringify(data), {headers: header})
      .map(res => res.json())
      .subscribe(_data => {
        resolve(_data);
      }, err => {
        reject(err);
      })
    })
  }

  getAll(){
    return new Promise((resolve,reject) => {
      let header = new Headers();
      header.append('Content-Type', 'application/json'); 
     
      this.http.get('http://localhost:8080/produto', {headers: header})
      .map(res => res.json())
      .subscribe(_data => {
        resolve(_data);
      }, err => {
        reject(err);
      })
    })
  }

  delete(id) {
    return new Promise((resolve,reject) => {
      let header = new Headers();
      header.append('Content-Type', 'application/json'); 
     
      this.http.delete('http://localhost:8080/produto/' + id, {headers: header})
      .map(res => res.json())
      .subscribe(_data => {
        resolve(_data);
      }, err => {
        reject(err);
      })
    })
  }

  edit(data, id) {
    return new Promise((resolve,reject) => {
      let header = new Headers(); 
      header.append('Content-Type', 'application/json');

      this.http.put('http://localhost:8080/produto/' + id, JSON.stringify(data), {headers: header})
      .map(res => res.json())
      .subscribe(_data => {
        resolve(_data);
      }, err => {
        reject(err);
      })
    })
  }

  getOne(id) {
    return new Promise((resolve,reject) => {
      let header = new Headers();
      header.append('Content-Type', 'application/json'); 
     
      this.http.get('http://localhost:8080/produto/' + id, {headers: header})
      .map(res => res.json())
      .subscribe(_data => {
        resolve(_data);
      }, err => {
        reject(err);
      })
    })
  }

}
