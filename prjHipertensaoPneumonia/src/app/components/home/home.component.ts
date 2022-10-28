import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttons = [
    {
      text: 'Hipertensão',
      path: 'hipertensao'
    },
    {
      text: 'Pneumonia',
      path: 'pneumonia'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
