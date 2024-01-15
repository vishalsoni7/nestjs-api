import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chatbot')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post('ask')
  handleInput(@Body('question') userInput: string) {
    const response = this.chatService.handleUserInput(userInput);
    return response;
  }
}
