import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {SystemAlert} from './model/SystemAlert';

@Injectable({
  providedIn: 'root'
})
export class UilibService {

  constructor() { }

  getSystemAlerts(): Observable<SystemAlert[]>{
    return of([
      {id: 1, message: 'test'},
      {id: 2, message: 'message 2'}
    ]);
  }
}
