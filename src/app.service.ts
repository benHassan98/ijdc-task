import { Injectable } from '@nestjs/common';
import { Task } from './task/task.class';

@Injectable()
export class AppService {
  taskList: Task[] = [];
  create(task: Task) {
    this.taskList.push(task);
  }
  getAll() {
    return this.taskList;
  }
  update(id: string, task: Task) {
    this.taskList = this.taskList.map(i => i.id === id ? task : i);
    return this.taskList.find(i => i.id === id);
  }
  delete(id: string) {
    this.taskList = this.taskList.filter(i => i.id !== id);
  }
}
