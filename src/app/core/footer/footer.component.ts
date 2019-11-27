import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  fecha: Date;
  constructor() { }

  ngOnInit() {
    this.autor = 'Alejandro Cerezo - alce65@hotmail.es';
    this.fecha = new Date();
  }

}
