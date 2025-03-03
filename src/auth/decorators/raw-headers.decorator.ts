import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const RawHeaders = createParamDecorator(
  (request: Express.Request, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.rawHeaders
  },
);
