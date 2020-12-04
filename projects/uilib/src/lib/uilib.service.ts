import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {SystemAlert} from './model/SystemAlert';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UilibService {

  constructor(private httpClient: HttpClient) { }

  getSystemAlerts(): Observable<SystemAlert[]>{
    return this.httpClient.get<SystemAlert[]>('http://localhost:8080/systemalerts');
  }
  getSystemAlertsStatic(): Observable<SystemAlert[]>{
    return of([
      {id: 1, message: 'test'},
      {id: 2, message: 'message 2'}
    ]);
  }
}
