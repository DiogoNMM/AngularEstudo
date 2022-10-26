import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();
  // Esse "EventEmitter" ele sempre vai falar: "Estou emitindo um dado, estou enviando um valor"

  public list:Array<{nome: string, idade:number}> = [
    {nome: 'Diogo', idade: 19},
    {nome: 'Julia', idade: 18},
    {nome: 'Barcala', idade: 20},
  ]



  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
    // Estamos enviando esses dados para fora, porém, de alguma forma devemos pegar esses dados
  }

}
