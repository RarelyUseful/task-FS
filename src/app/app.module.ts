import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayTasksComponent } from './components/display-tasks/display-tasks.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';

@NgModule({
  declarations: [AppComponent, DisplayTasksComponent, FilterTextPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
