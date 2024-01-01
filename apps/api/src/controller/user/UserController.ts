import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../../internal/user/UserService';
import { UserSignUpRequest } from '../../dto/user/UserSignUpRequest';
import { ResponseEntity } from '@app/common-config/res/ResponseEntity';
import { UserInformationResponse } from '../../dto/user/UserInformationResponse';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<ResponseEntity<UserInformationResponse>>{
    return ResponseEntity.ok(await this.userService.getUser(id));
  }

  @Post('/signup')
  async signUp(
    @Body() request: UserSignUpRequest,
  ): Promise<ResponseEntity<UserInformationResponse>> {
    return ResponseEntity.ok(await this.userService.create(request.toEntity()));
  }
}
