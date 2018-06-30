import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear(action: string) {
    if (confirm('Are you sure?')){
      if ('top5' === action){
        if (this.messages.length > 5){
          this.messages.splice(0,5);
          return;
        }
      }
        
      this.messages = [];
    }
  }
}
