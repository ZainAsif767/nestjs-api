import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
    // in case i want to return user's email or id etc
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx
    .switchToHttp()
    .getRequest();
    if(data) {
        return request.user[data];
    }
    return request.user;
  },
);