import { Controller } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { routesV1 } from '@src/configs/app.routes';

@Controller(routesV1.version)
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Write the controller
}
