import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Get()
  listMessage() {
    console.log('List Message');
    return 'List Message';
  }
  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }
  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
