import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pl-sintomas-h',
  templateUrl: './pl-sintomas-h.component.html',
  styleUrls: ['./pl-sintomas-h.component.scss']
})
export class PlSintomasHComponent implements OnInit {

  sintomas = ['Dor de cabeça', 'Falta de ar', 'Visão borrada', 'Zumbido no ouvido', 'Tontura', 'Dores no peito'];

  constructor() { }

  ngOnInit(): void {
  }

}
