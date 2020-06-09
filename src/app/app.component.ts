import { Component } from '@angular/core';
import {StoreTestService} from './store-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storybook';
  result = 0;

  constructor(
    private storeTestService: StoreTestService
  ) { }

  public onClickSumButton() {
    const result = this.storeTestService.sum(5, 5);
    this.result = result;
}
}
