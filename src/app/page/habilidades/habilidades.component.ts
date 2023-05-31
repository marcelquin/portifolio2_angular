import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  habilidades = [
    {tec: 'https://drive.google.com/file/d/1hUNCBby2xw3B9BT1qC1e9yJCgQQxShSw/view?usp=sharing',
  descrisao: 'HTML5 é a quinta e última versão do HTML, sigla de Hypertext Markup Language, uma das primeiras e principais linguagens de marcação da web. O HTML serve, basicamente, para o desenvolvimento de páginas que contenham conteúdos simples, como textos, imagens, áudio, vídeos e etc.'},
    {tec: 'https://drive.google.com/file/d/1ZKosH20j1oHa7YyrrLK6lz7_X7sDL0H_/view?usp=sharing',
  descrisao: 'CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets (ou simplesmente CSS), pela qual se define estilos para um projeto web (página de internet).'},
    {tec:'https://drive.google.com/file/d/1lbHYjHYjXuLG79ym88rKaX3e2Jg3doxZ/view?usp=sharing',
  descrisao: 'Vite é uma ferramenta de construção que foi inicialmente desenvolvida para Vue. js. Com a nova atualização, o Vite agora oferece suporte à maioria das estruturas da web.'},
  {tec: 'https://drive.google.com/file/d/1BMCALF2cFqrmRlZMlZHgEoSaTCPXwC7o/view?usp=sharing',
descrisao: 'React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.'},
  {tec: 'https://drive.google.com/file/d/1fkOMOeQ9KhyCLEfViiAyoiscq9i0XI2v/view?usp=sharing',
  descrisao: 'Java é uma linguagem de programação e plataforma de computação liberada pela primeira vez pela Sun Microsystems em 1995. De um início humilde, ela evoluiu para uma grande participação no mundo digital dos dias atuais, oferecendo a plataforma confiável na qual muitos serviços e aplicativos são desenvolvidos.'},
  {tec: 'https://drive.google.com/file/d/1z_BAMnBiB-etKM2cJ5NiuF3w_mSq6eTG/view?usp=sharing',
  descrisao: 'Git é um sistema de controle de versão distribuído, o que significa que um clone local do projeto é um repositório de controle de versão completo. Esses repositórios locais totalmente funcionais facilitam o trabalho offline ou remotamente.'},
  {tec: 'https://drive.google.com/file/d/1dSaTsbpHmcOJZqWcCc92PZ0YfoqXjwtu/view?usp=sharing',
  descrisao: 'Photoshop é um software da multinacional americana Adobe Inc. usado para edição de imagens, criação de arte digital, design gráfico e animações. A multiplicidade de usos do software faz com que o Photoshop seja uma ferramenta de trabalho para diversos tipos de profissionais.'},



]
  
}
