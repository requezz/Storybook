import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../store-test.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

 items() {
   return this.service.items;
 }

  forPost() {
    return this.service.forPost;
  }

  database() {
   return this.service.database;
  }

  forPopular() {
    return this.service.forPopular;
  }

  forUpcoming() {
    return this.service.forUpcoming;
  }

  forSubscribe() {
    return this.service.forSubscribe;
  }


constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
