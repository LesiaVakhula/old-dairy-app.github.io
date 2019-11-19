import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../models/models';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() messageTask: ITask;
  @Input() index: ITask;

  constructor(private taskservice: TasksService) { }

  ngOnInit() { }

  public addMessage(message: string): void {
    this.messageTask.comments.push(message);
    const tasks = this.taskservice.getTasks()
      .map((task: ITask) => {
        if (task.id === this.messageTask.id) {
          task.comments = this.messageTask.comments;
        }
        return task;
      });
    this.taskservice.setTasksToLocalStorage(tasks);
  }

}
