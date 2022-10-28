import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttons = [
    {
      text: 'Alimentos Trangênicos',
      path: 'hipertensao'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
