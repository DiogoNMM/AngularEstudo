import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.scss']
})
export class TittleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public tittle:String = "Bem-vindo";

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    // console.log("Foi alterado o valor do título");
  }

  ngOnDestroy(): void {
     console.log("O componente foi destruído");
  }

  

}
