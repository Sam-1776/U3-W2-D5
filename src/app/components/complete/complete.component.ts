import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/service/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  todos!: Todo[]
  notodo: string = 'No task'
  recupero: string = 'Recupero Task.'
  tempo!: number

  constructor( private tosoSrv: TodosService) { }

  ngOnInit(): void {
    this.countdown()
  }

  write(){
    const todo = this.tosoSrv.getTodos()
    this.todos = todo
  }


  countdown(){
    let time: number = 2
    let timer = setInterval(() => {
      time--
      this.recupero = this.recupero + '.'
      this.tempo = time
      if (time === 0) {
        this.write()
        clearInterval(timer)
      }
    }, 1000);
   }

}
