import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('message')
export class MessageController {
  @Get()
  listMessage() {
    console.log('List Message');
    return 'List Message';
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
