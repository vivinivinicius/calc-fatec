import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  numero1: number = 0;
  numero2: number = 0;
  numero3: number = 0;
  numero4: number = 0;
  numero5: number = 0;
  numero6: number = 0;
  numero7: number = 0;
  numero8: number = 0;
  soma: number = 0;
  divisao: number = 0;
  multiplicacao: number = 0;
  subtracao: number = 0;

  calcularSomaa() {
    this.soma = this.numero1 + this.numero2;
  }

  calcularDivisao() {
    this.divisao = this.numero3 / this.numero4;
  }

  calcularMultiplicacao() {
    this.multiplicacao = this.numero5 * this.numero6;
  }

  calcularSubtracao() {
    this.subtracao = this.numero7 - this.numero8;
  }
}
