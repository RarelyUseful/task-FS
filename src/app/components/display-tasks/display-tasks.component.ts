import { Component, OnInit } from '@angular/core';
import { FetchTasksService } from 'src/app/services/fetch-tasks.service';
import { Tasks } from 'src/app/interfaces/tasks';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.scss'],
})
export class DisplayTasksComponent implements OnInit {
  constructor(private _tasksService: FetchTasksService) {}

  public tasks: Tasks[] = [];
  public searchPhrase: string = '';

  async ngOnInit(): Promise<void> {
    this.tasks = await this._tasksService.getTasksFromAPI();
  }
}
