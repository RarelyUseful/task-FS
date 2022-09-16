import { Component, OnInit } from '@angular/core';
import { FetchTasksService } from 'src/app/services/fetch-tasks.service';
import { Tasks } from 'src/app/interfaces/tasks';

@Component({
  selector: 'app-display-tasks-observable',
  templateUrl: './display-tasks-observable.component.html',
  styleUrls: ['./display-tasks-observable.component.scss'],
})
export class DisplayTasksObservableComponent implements OnInit {
  constructor(private _tasksService: FetchTasksService) {}

  public tasks: Tasks[] = [];
  public searchPhrase: string = '';

  ngOnInit(): void {
    this._tasksService.getTasksAsObservable().subscribe((tasksData) => {
      this.tasks = tasksData;
    });
  }
}
