import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { list } from './list'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private _url :string = "https://askoverflow-server.vashishth-patel.repl.co/publicquestionsget"

  constructor(private http: HttpClient) { }

  getLists():Observable<list[]> {

    return this.http.get<list[]>(this._url)
    
  }
}
