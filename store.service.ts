import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  api: string = ' https://jsonplaceholder.typicode.com/posts';
  constructor(public http: HttpClient) {}
  getBlogPost(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}`);
  }
}
