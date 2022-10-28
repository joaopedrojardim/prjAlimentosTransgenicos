import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tc-tratamentos-p',
  templateUrl: './tc-tratamentos-p.component.html',
  styleUrls: ['./tc-tratamentos-p.component.scss']
})
export class TcTratamentosPComponent implements OnInit {

  sections = [
    {
      tipo: "Tratamento em Casa",
      img: "./../../../../assets/img/tratamento_pneumonia/casa.jpg",
      paragrafo1: "Em casa é muito importante manter todas as indicações, utilizando todos os remédios receitados pelo médico. Além disso, é preciso ter outros cuidados para acelerar o tratamento como:",
      lista: true,
      lado: "left"
    },
    {
      tipo: "Tratamento Hospitalar",
      img: "./../../../../assets/img/tratamento_pneumonia/hospital.jpg",
      paragrafo1: "O tratamento no hospital é mais comum nos casos de pneumonia bacteriana, pois a doença evolui muito rapidamente, podendo colocar em risco a vida do paciente. Por isso, é importante ficar internado para receber os medicamentos diretamente na veia e manter uma avaliação constante de todos os sinais vitais até que a doença esteja controlada, o que pode demorar até 3 semanas. Além disso, durante o internamento também pode ser necessário ficar com uma máscara de oxigênio para diminuir o trabalho do pulmão e facilitar a recuperação.",
      paragrafo2: "Nos casos mais graves, que são mais frequentes em idosos, crianças ou pacientes com doenças autoimunes, a doença pode evoluir muito e impedir o funcionamento dos pulmões, sendo necessário ficar internado em uma UTI para garantir a respiração com um ventilador, que é uma máquina que substitui o pulmão durante o tratamento.",
      lista: false,
      lado: "right"
    }
  ]

  lista = [
    {
      topico: " Evitar sair de casa durante o inicio do tratamento, nos primeiros 3 a 5 dias, de acordo com o tipo de pneumonia, pois por mais que não existam sintomas, é possível transmitir a doença para outras pessoas;"
    },
    {
      espaco: "esp",
      topico: "Tomar os medicamentos nos horários e doses corretas, de acordo com a receita do médico;"
    },
    {
      espaco: "esp",
      topico: "Beber cerca de 2 litros de água por dia, para evitar desidratação;"
    },
    {
      espaco: "esp",
      topico: "Evitar usar medicamentos para a tosse que não foram indicados pelo médico;"
    },
    {
      espaco: "esp",
      topico: "Vestir roupa adequada à temperatura, evitando alterações bruscas."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
