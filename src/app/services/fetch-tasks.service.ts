import { Injectable } from '@angular/core';
import JsonData from '../../assets/response.json';

@Injectable({
  providedIn: 'root',
})
export class FetchTasksService {
  constructor() {}

  async getTasksFromAPI(): Promise<any[]> {
    return new Promise((response, reject) => {
      setTimeout(() => {
        response(JsonData.response.data);
      }, 3000);
    });
  }
}
