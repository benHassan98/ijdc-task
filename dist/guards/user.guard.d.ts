import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class UserRoleGuard implements CanActivate {
    constructor();
    canActivate(context: ExecutionContext): boolean;
}
