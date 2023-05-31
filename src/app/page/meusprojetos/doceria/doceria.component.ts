import { Component } from '@angular/core';

@Component({
  selector: 'app-doceria',
  templateUrl: './doceria.component.html',
  styleUrls: ['./doceria.component.css']
})
export class DoceriaComponent {
  infoProjeto = [
    {nome: 'DOCERIA',
    descrisao: 'Feito com tecnicas de HTML5, CSS3, Flex, pronta para adição de novos recursos',
    tec1: 'HTML5',
    tec2: 'CSS3',
    tec3: 'Flex',
    linkgit: 'https://github.com/marcelquin/doceria',
    },
    ]
}
