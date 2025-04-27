import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { Task } from './task/task.class';
import { UserRoleGuard } from './guards/user.guard';
import { AdminRoleGuard } from './guards/admin.guard';
import { AppService } from './app.service';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';

@Controller("/tasks")
export class AppController {
  constructor(private appService: AppService) { }

  @UseGuards(UserRoleGuard)
  @Get()
  @ApiCreatedResponse({
    description: "Tasks Fetched Successfully"
  })
  getAll() {
    return this.appService.getAll();
  }

  @UseGuards(UserRoleGuard)
  @Post()
  @ApiCreatedResponse({
    description: "Task Created Successfully",
  })
  create(@Body() task: Task) {
    this.appService.create(task);
    return task;
  }

  @UseGuards(UserRoleGuard)
  @Put("/:id")
  @ApiCreatedResponse({
    description: "Task Updated Successfully",
    type: Task
  })
  update(@Param("id") id: string, @Body() task: Task) {
    return this.appService.update(id, task);
  }

  @UseGuards(UserRoleGuard)
  @Patch("/:id")
  @ApiCreatedResponse({
    description: "Task Updated Successfully",
    type: Task
  })
  fullUpdate(@Param("id") id: string, @Body() task: Task) {
    return this.appService.update(id, task);
  }
  @UseGuards(AdminRoleGuard)
  @Delete("/:id")
  @ApiCreatedResponse({
    description: "Task Deleted Successfully",
    type: String
  })
  delete(@Param("id") id: string) {
    this.appService.delete(id);
    return `Task with Id= ${id} is deleted`;
  }
}
