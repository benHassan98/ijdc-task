import { Task } from './task/task.class';
export declare class AppService {
    taskList: Task[];
    create(task: Task): void;
    getAll(): Task[];
    update(id: string, task: Task): Task | undefined;
    delete(id: string): void;
}
