import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';

@ApiTags('check-health')
@Controller('check-health')
@UseInterceptors(new TransformInterceptor())
export class CheckHealthController {
  @Get()
  async checkHealth() {
    return 'Ok';
  }
}
