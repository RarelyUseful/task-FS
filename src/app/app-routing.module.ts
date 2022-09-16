import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTasksComponent } from './components/display-tasks/display-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayTasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
