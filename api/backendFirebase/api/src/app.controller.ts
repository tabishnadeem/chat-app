import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ChatDTO } from './chat-dto';

@Controller('mongo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':user')
  async getAllChats(@Param() param){
    // console.log(param);
    
    // return param;

    
    return await this.appService.getAllChats(param.user);
  }

  @Post('signup')
  signUpUser(@Body() body){
   return this.appService.signUpUser(body)
  }

  @Post()
  async createEntry(@Body() chatDto:ChatDTO){
    return await this.appService.createEntry(chatDto);
  }
}
