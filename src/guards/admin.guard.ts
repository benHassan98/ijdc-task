import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor() { }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { role } = request.headers;
    return role === Role.Admin;
  }
}
