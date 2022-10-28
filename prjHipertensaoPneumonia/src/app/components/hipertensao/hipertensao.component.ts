import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hipertensao',
  templateUrl: './hipertensao.component.html',
  styleUrls: ['./hipertensao.component.scss']
})
export class HipertensaoComponent implements OnInit {

  buttons = [
    {
      text: 'Oque é',
      path: 'jp-causas-h'
    },
    {
      text: 'Sobre',
      path: 'lc-sobre-h'
    },
    {
      text: 'Sintomas ',
      path: 'pl-sintomas-h'
    },
    {
      text: 'Tratamento ',
      path: 'tc-tratamentos-h'
    },
    {
      text: 'Riscos',
      path: 'cg-curiosidades-h'
    }
  ]

  persons = [
    {
      personUrl: '../../../assets/person/Joao.jpg',
      path: 'jp-causas-h'
    },
    {
      personUrl: '../../../assets/person/Jorge.jpg',
      path: 'lc-sobre-h'
    },

    {
      personUrl: '../../../assets/person/Pablo.jpeg',
      path: 'pl-sintomas-h'
    },
    {
      personUrl: '../../../assets/person/Tiago.jpg',
      path: 'tc-tratamentos-h'
    },
    {
      personUrl: '../../../assets/person/celso.jpg',
      path: 'cg-curiosidades-h'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
