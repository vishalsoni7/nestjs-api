import { Controller, Post, Body, Get } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller()
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post('chatbot')
  handleInput(@Body('question') userInput: string) {
    const response = this.chatService.handleUserInput(userInput);
    return response;
  }

  @Get()
  handleRoot() {
    return { message: 'Welcome to the chatbot API!' };
  }
}
