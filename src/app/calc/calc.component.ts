import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  num4: number = 0;
  num5: number = 0;
  num6: number = 0;
  num7: number = 0;
  num8: number = 0;
  sum: number = 0;
  sumdivis: number = 0;
  summulti: number = 0;
  sumsub: number = 0;

  calc(){
  this.sum = this.num1 + this.num2;
  }
  calc2(){
    this.sumdivis = this.num3 / this.num4;
    }
    calc3() {
      this.summulti = this.num5 * this.num6;
    }
    calc4() {
      this.sumsub = this.num7 - this.num8;
    }

}
