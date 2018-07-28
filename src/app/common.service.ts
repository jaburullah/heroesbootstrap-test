import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor( private http: HttpClient) { }

  addCoin(name, price) {
    const uri = 'http://localhost:4000/coins/add';
    const obj = {
      name: name,
      price: price
    };
    this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  getUser() {
    const uri = 'http://localhost:8080/api/getUser';
    return this
      .http
      .get(uri).pipe(map(res => {
        return res;
      }));
    // return this
    //   .http
    //   .get(uri)
    //   .pipe(res => {
    //     return res;
    //   });
  }

}
