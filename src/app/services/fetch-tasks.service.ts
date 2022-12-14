import { Injectable } from '@angular/core';
import JsonData from '../../assets/response.json';
import { Tasks } from '../interfaces/tasks';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchTasksService {
  constructor() {}

  async getTasksFromAPI(): Promise<Tasks[]> {
    return new Promise((response, reject) => {
      setTimeout(() => {
        response(JsonData.response.data);
      }, 2000);
    });
  }

  getTasksAsObservable() {
    return of(JsonData.response.data).pipe(delay(2000));
  }
}
