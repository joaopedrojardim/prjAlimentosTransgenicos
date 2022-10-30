import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tc-tratamentos-h',
  templateUrl: './tc-tratamentos-h.component.html',
  styleUrls: ['./tc-tratamentos-h.component.scss']
})
export class TcTratamentosHComponent implements OnInit {

  sections = [
    {
      img: "./../../../../assets/meio-ambiente/semente1.jpg",
      paragrafo1: "Os perigos que os transgênicos podem oferecer ao meio ambiente são muitos.",
      paragrafo2: 'A inserção de genes de resistência a agrotóxicos em certos produtos transgênicos faz com que as pragas e as ervas-daninhas (inimigos naturais) desenvolvam a mesma resistência, tornando-se "super-pragas" e "super-ervas".',
      lado: "left"
    },
    {
      img: "./../../../../assets/meio-ambiente/ciencia_verde.png",
      paragrafo1: "Por exemplo, a soja Roundup Ready tem como característica resistir à aplicação do herbicida Roundup (glifosato). Isso vai exigir a aplicação de maiores quantidades de veneno nas plantações, com maior poluição dos rios e solos. Haverá ainda desequilíbrios nos ecossistemas a partir da maior resistência desenvolvida, ao longo dos anos, pelas pragas e ervas-daninhas.",
      paragrafo2: "Para o Brasil, detentor de uma biodiversidade ímpar, os prejuízos decorrentes da poluição genética e da perda de biodiversidade são outros graves problemas relacionados aos transgênicos.",
      lado: "right"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
