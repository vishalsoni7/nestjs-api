import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  handleUserInput(userInput: string) {
    const normalizedInput = userInput.toLowerCase();

    switch (normalizedInput) {
      case 'hello':
        return { response: 'Namaste 🙏🏻' };
      case 'who are you':
        return { response: 'I am a friendly chatbot!' };
      case 'who built you':
        return { response: 'Vishal, he is a Front End Developer 👨🏻‍💻' };
      case 'how are you today':
        return { response: "I don't have feelings, but I'm here to help you!" };
      case 'what can you do for me':
        return {
          response:
            'I can provide information, answer questions, of some predefined asks.',
        };
      case 'where are you located':
        return {
          response:
            "I exist in the digital realm, so I don't have a physical location.",
        };
      case 'what is the meaning of life':
        return {
          response:
            'The meaning of life is subjective and varies for each person.',
        };
      case 'how do you work':
        return {
          response:
            'I analyze and understand text to generate responses using advanced algorithms.',
        };
      case 'can you tell a joke':
        return {
          response:
            "Sure, here's one: Why did the computer keep its drink on the windowsill? It wanted a cold beverage!",
        };
      case "what's the weather like today":
        return {
          response:
            "I'm sorry, I don't have real-time information. You can check a weather website for the latest updates.",
        };
      case 'how tall are you':
        return {
          response: 'It depends on your smartphone screen.',
        };
      case 'what is your favourite colour':
        return {
          response:
            "I don't have preferences, but I can help you with color-related information.",
        };
      case 'can you sing a song':
        return {
          response:
            "I'm afraid I can't sing, but I can provide song lyrics or information about music.",
        };
      case 'do you dream':
        return {
          response:
            "No, I don't dream. I'm here to assist you with any questions you may have.",
        };
      case 'what languages do you speak':
        return {
          response: 'I can understand and generate text in multiple languages.',
        };
      case 'are you a robot':
        return {
          response:
            'I am a computer program designed to assist and provide information, not a physical robot.',
        };
      default:
        return {
          response:
            "I'm sorry, I didn't understand the question or I don't have a predefined response for that.",
        };
    }
  }
}
