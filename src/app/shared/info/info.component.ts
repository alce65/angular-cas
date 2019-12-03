import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cas-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() titulo: string;
  @Input() autor: string = 'Anonimo';
  constructor() { }

  ngOnInit() {
  }

}
