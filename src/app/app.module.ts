import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompleteComponent } from './components/complete/complete.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Route[] = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'complete',
    component: CompleteComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompleteComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
