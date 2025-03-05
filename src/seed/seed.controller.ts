import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from '../auth/interfaces';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}


  @Get()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  excecuteSeed() {
    return this.seedService.runSeed();
  }

}
