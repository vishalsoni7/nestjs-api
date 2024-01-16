import { Controller, Post, Body, Get } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller()
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  handleRoot() {
    return { message: 'Welcome to the chatbot API!' };
  }

  @Post('chatbot/ask')
  handleInput(@Body('question') userInput: string) {
    const response = this.chatService.handleUserInput(userInput);
    return response;
  }
}
