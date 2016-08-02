import { Component, Input} from '@angular/core';
import { GeneratedNumber } from './generatedNumber';

@Component({
  selector: 'results',
  templateUrl: 'app/results.component.html',
})
export class ResultsComponent{
  @Input()
  lastGeneratedNumber: GeneratedNumber;
}
