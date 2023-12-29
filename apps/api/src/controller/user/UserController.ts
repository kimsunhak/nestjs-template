import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../internal/user/UserService';
import { UserSignUpRequest } from '../../dto/user/UserSignUpRequest';
import { ResponseEntity } from '@app/common-config/res/ResponseEntity';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): ResponseEntity<string> {
    return ResponseEntity.ok(this.userService.getUser());
  }

  @Post('/signup')
  async signUp(@Body() request: UserSignUpRequest): Promise<ResponseEntity<string>> {
    try {
      await this.userService.create(request.toEntity());
      return ResponseEntity.ok('회원가입이 완료 되었습니다.');
    } catch (error) {
      return ResponseEntity.error(error);
    }
  }
}
