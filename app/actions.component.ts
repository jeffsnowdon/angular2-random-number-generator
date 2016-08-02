import { Component, Input } from '@angular/core';
import { GeneratedNumber } from './generatedNumber';

@Component({
  selector: 'actions',
  templateUrl: 'app/actions.component.html'
})
export class ActionsComponent{
  @Input()
  lastGeneratedNumber: GeneratedNumber;
  randomize(){
    this.lastGeneratedNumber.setTheNumber(this.produceRandomNumber());
  }

  produceRandomNumber(){
    return Math.round(Math.random()* 100);
  }
}
