import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Diogo";
  public idade: number = 18;
  public maisUm: number = 1;

  public checkedDisable: boolean = true;
  public imgSrc: string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  public imgTitle: string = "GOOGLE";


  public position: {x: number, y:number} = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo() {
    alert('Deu bom Diogo');
  }
  public alertaInfo2(valor: string) {
    alert(valor);
  }
  public alertaInfo3(valor: MouseEvent) {
    console.log(valor);
  }
  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
