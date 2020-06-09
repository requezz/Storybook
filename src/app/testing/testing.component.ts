import {Component, Input, OnInit} from '@angular/core';
import {StoreTestService} from '../store-test.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  @Input() a!: number;
  @Input() b!: number;

  public amount: number;

  constructor(private storeTestService: StoreTestService) { }

  ngOnInit(): void {
    this.amount = this.storeTestService.sum(
      this.a,
      this.b
    );
  }

}

