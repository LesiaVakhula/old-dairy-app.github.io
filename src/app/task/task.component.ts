import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../models/models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() idTask: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  public deleteTask (): void {
    this.delete.emit(this.task);
  }

  public sendId (): void {
    this.idTask.emit(this.task.id);
  }
}
