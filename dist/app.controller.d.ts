import { Task } from './task/task.class';
import { AppService } from './app.service';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    getAll(): Task[];
    create(task: Task): Task;
    update(id: string, task: Task): Task | undefined;
    fullUpdate(id: string, task: Task): Task | undefined;
    delete(id: string): string;
}
