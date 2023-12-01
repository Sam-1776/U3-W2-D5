import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: Todo[] = []

  constructor() { }

  getTodos(): any {
        console.log(this.todos);
        return this.todos
  }

  setTodos(title: string){
      let todo : Todo = { id: this.todos.length + 1, title: title, completed: false}
      this.todos.push(todo)
      console.log(this.todos);
  }

  complete(data: Partial<Todo>, id: number){
      this.todos = this.todos.map(todo => todo.id == id ? {...todo, ...data}: todo);
      return this.todos.find(todo => todo.id == id) as Todo
  }

}
