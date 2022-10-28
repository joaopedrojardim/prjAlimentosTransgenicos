import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pneumonia',
  templateUrl: './pneumonia.component.html',
  styleUrls: ['./pneumonia.component.scss']
})
export class PneumoniaComponent implements OnInit {

  buttons = [
    {
      text: 'Sobre',
      path: 'lc-sobre-p'
    },
    {
      text: 'Causas',
      path: 'jp-causas-p'
    },
    {
      text: 'Sintomas ',
      path: 'pl-sintomas-p'
    },
    {
      text: 'Tratamento ',
      path: 'tc-tratamentos-p'
    },
    {
      text: 'Curiosidades',
      path: 'cg-curiosidades-p'
    }
  ]

  persons = [
    {
      personUrl: '../../../assets/person/Jorge.jpg',
      path: 'lc-sobre-p'
    },
    {
      personUrl: '../../../assets/person/Joao.jpg',
      path: 'jp-causas-p'
    },
    {
      personUrl: '../../../assets/person/Pablo.jpg',
      path: 'pl-sintomas-p'
    },
    {
      personUrl: '../../../assets/person/Tiago.jpg',
      path: 'tc-tratamentos-p'
    },
    {
      personUrl: '../../../assets/person/celso.jpg',
      path: 'cg-curiosidades-p'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
