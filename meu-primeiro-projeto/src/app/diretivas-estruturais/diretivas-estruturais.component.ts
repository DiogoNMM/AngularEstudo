import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Diogo Moreno", idade: 18 },
    { nome: "Lucas Nascimento", idade: 4 },
    { nome: "Davi Nascimento", idade: 4 },
  ];
  public nome: string = "diogo";

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true
      }
    }, 2000)
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true
    }
  }

  public onClickAddList(){
    this.list.push({nome: "Keila Nascimento", idade: 30})
  }

  public onClickEventList(event: number){
    // Splice serve para remover um item do nosso array
    this.list.splice(event, 1)
  }

}
