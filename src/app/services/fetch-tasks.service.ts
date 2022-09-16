import { Injectable } from '@angular/core';
import JsonData from '../../assets/response.json';
import { Tasks } from '../interfaces/tasks';

@Injectable({
  providedIn: 'root',
})
export class FetchTasksService {
  constructor() {}

  async getTasksFromAPI(): Promise<Tasks[]> {
    return new Promise((response, reject) => {
      setTimeout(() => {
        response(JsonData.response.data);
      }, 3000);
    });
  }
}
