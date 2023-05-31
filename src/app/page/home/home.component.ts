import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  infoPessoal = [
    {nome: 'MARCEL HIGOR QUINTEIRO ARAUJO', idade: '35 Anos', 
    email: 'quinteiromarcel@gmail.com', 
    prefone: 65, fonep1: 99672,
    fonep2:5190,
    facebook: 'https://www.facebook.com/ursoquinteiro',
    instagram: 'https://instagram.com/marcelquinteiro9?igshid=MzNlNGNkZWQ4Mg==',
    linkedin: 'https://www.linkedin.com/in/marcel-quinteiro-b92111256/',
    git: 'https://github.com/marcelquin',  
  },
  ]
}
