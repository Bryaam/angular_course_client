import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title:string;

  constructor() {
    this.title = "Product's App Main Page"
  }

  ngOnInit() {
    console.log("Home Component loaded!!!")
  }

}
