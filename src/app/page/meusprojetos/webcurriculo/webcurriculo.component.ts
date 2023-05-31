import { Component } from '@angular/core';

@Component({
  selector: 'app-webcurriculo',
  templateUrl: './webcurriculo.component.html',
  styleUrls: ['./webcurriculo.component.css']
})
export class WebcurriculoComponent {
  infoProjeto = [
    {nome: 'WEBCURRICULO',
    descrisao: 'Feito com tecnicas de HTML5, CSS3, Flex, React, Vite, pronto para adição de novos recursos',
    tec1: 'HTML5',
    tec2: 'CSS3',
    tec3: 'Flex',
    tec4: 'React',
    tec5: 'Vite',
    linkgit: 'https://github.com/marcelquin/webcurriculo_react',
    },
    ]
}
