import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tc-tratamentos-h',
  templateUrl: './tc-tratamentos-h.component.html',
  styleUrls: ['./tc-tratamentos-h.component.scss']
})
export class TcTratamentosHComponent implements OnInit {

  sections = [
    {
      img: "./../../../../assets/img/tratamento_hipertensao/tratamento2.jpg",
      paragrafo1: "A pressão alta não tem cura, mas tem tratamento e pode ser controlada. Somente o médico poderá determinar o melhor método para cada paciente.",
      paragrafo2: "O Sistema Único de Saúde (SUS) oferece gratuitamente medicamentos nas Unidades Básicas de Saúde (UBS) e pelo programa Farmácia Popular. Para retirar os remédios, basta apresentar um documento de identidade com foto, CPF e receita médica dentro do prazo de validade, que são 120 dias. A receita pode ser emitida tanto por um profissional do SUS quanto por um médico que atende em hospitais ou clínicas privadas.",
      lado: "left"
    },
    {
      img: "./../../../../assets/img/tratamento_hipertensao/tratamento.jpg",
      paragrafo1: "Para reduzir as chances de se ter pressão alta é necessário que os níveis de pressão sejam normalizados através da melhora dos hábitos de vida e/ou com o uso de medicamentos. Nos pacientes hipertensos leves, o controle do peso corporal, a alimentação saudável e balanceada, a prática de atividade física moderada (por exemplo, caminhadas rápidas de 30 min, 5x na semana) e a diminuição do consumo de bebidas alcoólicas podem ser o suficiente para controlar os níveis tensionais.",
      paragrafo2: "Algumas indicações são: ",
      lista: true,
      lado: "right"
    }
  ]

  lista = [
    {
      topico: "Refeições equilibradas (verduras. legumes. grãos e azeites), consumir menos gordura animal, açúcar, refrigerantes e doces, evitar o uso de enlatados e conservas, carnes embutidas, defumados, frituras, creme de leite, maionese."
    },
    {
      espaco: "esp",
      topico: "É sempre bom dar sabor aos alimentos com iguarias, ervas ou sucos de frutas. Manjericão, canela, cominho, curry, mostarda seca, alho, cebola, páprica ou pimenta são algumas delas."
    },
    {
      espaco: "esp",
      topico: "Evitar a ingestão de bebidas alcoólicas. Elas contribuem para o aumento da pressão e para o aumento de peso."
    },
    {
      espaco: "esp",
      topico: "Habituar-se à prática regular de atividade física aeróbica, como caminhadas por pelo menos, 30 minutos por dia, 3 vezes/semana."
    },
    {
      espaco: "esp",
      topico: "Parar de fumar é fundamental."
    },
    {
      espaco: "esp",
      topico: "Evitar o estresse, se divertir, ter tempo para sua familia e para você, fazem parte do tratamento, melhorando sua qualidade de vida e auxiliando no controle da pressão."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
