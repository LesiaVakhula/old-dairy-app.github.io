import { Injectable } from '@angular/core';
import { ITask } from '../models/models';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public deleteTask$ = new Subject();
  public tasks$ = new ReplaySubject(1);
  public tasks: ITask[] = [];

  constructor() { this.init(); }

  private init() {
    this.tasks$.next(this.getTasks());
    this.deleteTask$.subscribe((task: ITask) => {
      let index: number;
      this.tasks = this.getTasks();
      index = this.tasks.findIndex((item) => item.id === task.id);
      this.tasks.splice(index, 1);
      this.setTasksToLocalStorage(this.tasks);
      this.tasks$.next(this.tasks);
    });
  }

  public getTasks (): ITask[] {
    return localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
  }

  public setTasksToLocalStorage (tasks):  void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.tasks$.next(this.getTasks());
  }

  public getTask (id: number): ITask {
    return this.getTasks().find(data => data.id === id);
  }
}
