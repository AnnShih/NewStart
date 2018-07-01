import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HeroCounterInterface } from './hero-counter.interface';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<number> = this.counterService.counter$;

  constructor(public messageService: MessageService, private counterService: HeroCounterInterface) {}
  
  title = 'Tour of Heroes';
}
