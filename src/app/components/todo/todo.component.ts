import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todo!: string;
  todos!: Todo[];
  noTodo: string = 'No task';
  recupero: string = 'Recupero Task.';
  tempo!: number;

  constructor(private todoSrv: TodosService) {}

  ngOnInit(): void {
    this.countdown();
  }

  addTodo(title: string) {
    setTimeout(() => {
      this.todoSrv.setTodos(title);
      this.write();
    }, 2000);
  }

  write() {
    const element: any = this.todoSrv.getTodos();
    this.todos = element;
  }

  madeIt(id: number, i: number) {
    setTimeout(() => {
      this.todoSrv.complete({ completed: true }, id);
      this.todos.splice(i, 1);
    }, 2000);
  }

  countdown() {
    let time: number = 2;
    let timer = setInterval(() => {
      time--;
      this.recupero = this.recupero + '.';
      this.tempo = time;
      if (time === 0) {
        this.write();
        clearInterval(timer);
      }
    }, 1000);
  }
}
