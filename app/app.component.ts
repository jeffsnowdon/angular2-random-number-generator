import { Component } from '@angular/core';
import { ActionsComponent } from './actions.component';
import { GeneratedNumber } from './generatedNumber';
import { ResultsComponent } from './results.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [ActionsComponent, ResultsComponent]
})
export class AppComponent {
  lastGeneratedNumber = new GeneratedNumber(-1);
  title = 'Random Number Generator';
}
