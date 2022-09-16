import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { DisplayTasksObservableComponent } from './components/display-tasks-observable/display-tasks-observable.component';
import { DisplayTasksComponent } from './components/display-tasks/display-tasks.component';

const routes: Routes = [
  {
    path: 'promise',
    component: DisplayTasksComponent,
  },
  {
    path: 'observable',
    component: DisplayTasksObservableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
