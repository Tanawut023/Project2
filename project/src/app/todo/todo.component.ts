import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private result: Array<any>;
  constructor( private todoService: TodoService) {
    this.onLoad();
  }

  ngOnInit() {
  }

  onLoad() {
    this.todoService.gettoDO().subscribe(res => {
    this.result = res;
    });
  }
}
