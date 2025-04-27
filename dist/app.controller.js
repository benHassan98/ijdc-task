"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const task_class_1 = require("./task/task.class");
const user_guard_1 = require("./guards/user.guard");
const admin_guard_1 = require("./guards/admin.guard");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getAll() {
        return this.appService.getAll();
    }
    create(task) {
        this.appService.create(task);
        return task;
    }
    update(id, task) {
        return this.appService.update(id, task);
    }
    fullUpdate(id, task) {
        return this.appService.update(id, task);
    }
    delete(id) {
        this.appService.delete(id);
        return `Task with Id= ${id} is deleted`;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserRoleGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Tasks Fetched Successfully"
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserRoleGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Task Created Successfully",
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_class_1.Task]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserRoleGuard),
    (0, common_1.Put)("/:id"),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Task Updated Successfully",
        type: task_class_1.Task
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, task_class_1.Task]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserRoleGuard),
    (0, common_1.Patch)("/:id"),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Task Updated Successfully",
        type: task_class_1.Task
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, task_class_1.Task]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "fullUpdate", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminRoleGuard),
    (0, common_1.Delete)("/:id"),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Task Deleted Successfully",
        type: String
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "delete", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)("/tasks"),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map