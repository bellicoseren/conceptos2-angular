import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  public name : string;
  public edad : number;
  public edades : number[];

  constructor() { }

  ngOnInit() {
    this.name = 'Reni';
    this.edad = 37;
  }

  getEdadNombre() : string {
    return `${this.name} : ${this.edad}`;
  }

}
