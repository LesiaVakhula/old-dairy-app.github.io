import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITask } from '../models/models';
import { TasksService } from '../service/tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  public tasks: ITask[] = [];
  public messageTask: ITask = null;
  public index: number;

  private tasksSubscribtion: Subscription;

  constructor(private taskservice: TasksService) { }

  ngOnInit() {
    this.tasksSubscribtion = this.taskservice.tasks$.subscribe((tasks: ITask[]) => {
      this.tasks = tasks;
    });
  }

  ngOnDestroy() {
    this.tasksSubscribtion.unsubscribe();
  }

  public addTask(inputvalue: string): void {
    const task = { name: inputvalue, comments: [], id: Math.floor(Math.random() * 1000)};
    this.tasks.push(task);
    this.taskservice.setTasksToLocalStorage(this.tasks);
  }

  public onDelete (task: ITask): void {
    this.taskservice.deleteTask$.next(task);
    this.messageTask = null;
  }

  public message (id: number): void {
    this.messageTask = this.taskservice.getTask(id);
    this.index = this.taskservice.getTasks().findIndex(elem => elem.id === this.messageTask.id) + 1;
  }
}
