import { Component } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent {
  infoProjeto = [
    {nome: 'PORTIFOLIO',
    descrisao: 'Feito com tecnicas de HTML5, CSS3, Flex, React, Vite, pronto para adição de novos recursos',
    tec1: 'HTML5',
    tec2: 'CSS3',
    tec3: 'Flex',
    tec4: 'React',
    tec5: 'Vite',
    linkgit:'https://github.com/marcelquin/Portifolio',
    linkgitangular: 'https://github.com/marcelquin/portifolio2_angular',
    },
    ]
}
