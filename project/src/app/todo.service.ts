import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  gettoDO() {
    return this.http.get('/show').map(res => res.json().message);
  }
}

