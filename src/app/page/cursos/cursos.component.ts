import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  Cursos = [
    {instituicao:'FID', curso: 'Baicharelado em  Sistema de Informação', ano:2013, linkCertificado: 'https://drive.google.com/file/d/1ZPHRZFHs4G9MrJPf94ruMzPI_ClXGJcs/view?usp=sharing'},
    {instituicao:'UDEMY', curso: 'HTML5 e CSS3 : Tecnicas Avançadas', ano:2023, linkCertificado: 'https://drive.google.com/file/d/1p96IV4GtOvrge4s8wGO1G9dFlIKIZlZb/view?usp=sharing'},
    {instituicao:'UDEMY', curso: 'Java Completo Programaão Orinetada a Objetos + projetos', ano:2023, linkCertificado: 'https://drive.google.com/file/d/10YYNVCXbKe_MZlt8_R25Ym8YXInP1rnm/view?usp=sharing'},
    {instituicao:'UDEMY', curso: 'Spring Boot & MVC com Thymeleaf', ano:2023, linkcursou: 'https://drive.google.com/file/d/1ZBWF_0QY5NJE0qORK02EtfwahUCB5L8w/view?usp=sharing'},
    {instituicao:'UDEMY', curso: 'JavaScript e TypeScript do básico ao avançado', ano:2023},
    {instituicao:'IPED', curso: 'CURSO DE PHP + MySQL', ano:2011, linkCertificado:'https://drive.google.com/file/d/1fFVUMWIbxqUJQntgOt6OUoVFHaaAYb1X/view?usp=sharing'},
    {instituicao:'IPED', curso: 'CURSO DE HTML', ano:2011, linkCertificado:'https://drive.google.com/file/d/1bmLQ3SaFQFpWlrV19Joa5eZNh5KnoL8T/view?usp=sharing'},
    {instituicao:'BRAVA CURSOS', curso: 'CURSO DE HTML5', ano:2012, linkCertificado:'https://drive.google.com/file/d/15lIosh1qeZog4I_DXMz2JMXAAOguwlmA/view?usp=sharing'},
    {instituicao:'SOFTBLUE', curso: 'CURSO DE SQL COMPLETO', ano:2011, linkCertificado:'https://drive.google.com/file/d/1qzFb3rDcpisdB8iJQYapKuSAzqLlmI2F/view?usp=sharing'},
    {instituicao:'ENSINO NACIONAL', curso: 'CURSO DE HTML5', ano:2011, linkCertificado:'https://drive.google.com/file/d/15-AsgMLEolIKpHmraCm85UigB63oQGv0/view?usp=sharing'},
    {instituicao:'ENSINO NACIONAL', curso: 'CURSO DE PHP', ano:2011, linkCertificado:'https://drive.google.com/file/d/13fFRouutFOlLrbeQzE0wEnuEMOFP752s/view?usp=sharing'},
    ];
}
