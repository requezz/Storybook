import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../store-test.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  forExplore() {
    return this.service.forExplore;
  }

  forMailbox() {
    return this.service.forMailbox;
  }

  forComment() {
    return this.service.forComment;
  }

  database() {
    return this.service.database;
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
