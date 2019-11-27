import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo: string;
  logo: string;
  logoAlt: string;

  constructor() {
   }

  ngOnInit() {
    this.titulo = 'Curso de Angular - CAS';
    this.logo = '../../../assets/logo.svg';
    this.logoAlt = 'Logotipo de Angular';
  }

}
