import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pl-sintomas-p',
  templateUrl: './pl-sintomas-p.component.html',
  styleUrls: ['./pl-sintomas-p.component.scss']
})
export class PlSintomasPComponent implements OnInit {

  sintomas = ['Febre alta', 'Dor no tórax', 'Tosse', 'Mal-estar', 'Falta de ar ou dificuldade respiratória', 'Confusão mental', 'Fraqueza', 'Secreção de muco purulento de cor amarelada ou esverdeada']

  constructor() { }

  ngOnInit(): void {
  }

}
