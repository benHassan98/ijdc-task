import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor() { }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { role } = request.headers;
    return role === Role.User || role === Role.Admin;
  }
}
