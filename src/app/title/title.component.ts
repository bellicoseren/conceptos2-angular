import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{
  public name : string;
  public moreInformation : boolean = false;
  public isAvailable : boolean = true;
  public topics : string[];
  public category : string;  // mobile, web, other

  constructor(){}

  ngOnInit(){
    this.category = 'web';
    this.name = 'Reni';
    this.topics = [
      'Fundamentos del framework',
      'Componentes',
      'Directivas',
      'Animaciones',
      'Servicios',
      'RxJS',
      'Binding',
    ];
  }
}



/*
ngIf
export class TitleComponent implements OnInit {
  public name : string;
  public edad : number;
  public edades : number[];

  public moreInformation : boolean = false;

  constructor() { }

  ngOnInit() {
    this.name = 'Reni';
    this.edad = 37;

    setTimeout(()=> this.moreInformation = true, 3000);
  }

  getEdadNombre() : string {
    return `${this.name} : ${this.edad}`;
  }

}
*/