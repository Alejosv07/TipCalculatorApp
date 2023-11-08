import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-main',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class Calculatorcomponent implements OnInit {
  
  bill : any = 0.0;
  tipPorcentage : any = 0;
  numberPerson : any = 0;
  TipPerson : any = 0.00;
  totalPerson : any = 0.00;

  public calculate(bill : string, billCostum : string, billPerson : string) {
    try{
      this.bill = parseFloat(bill);
      this.tipPorcentage = parseFloat(billCostum);
      this.numberPerson = parseFloat(billPerson);
      this.TipPerson = Number((this.bill*this.tipPorcentage)/this.numberPerson).toFixed(2);
      this.totalPerson = Number((this.bill/this.numberPerson)).toFixed(2);
      if(Number.isNaN(this.TipPerson)){
        this.TipPerson = 0;
      }
      if(Number.isNaN(this.totalPerson)){
        this.totalPerson = 0;
      }
    }catch(error){
      console.log(error);
    }
  }
  
  public calculate2() {
    try{
      this.TipPerson = Number((this.bill*this.tipPorcentage)/this.numberPerson).toFixed(2);
      this.totalPerson = Number((this.bill/this.numberPerson)).toFixed(2);
      if(Number.isNaN(this.TipPerson)){
        this.TipPerson = 0;
      }
      if(Number.isNaN(this.totalPerson)){
        this.totalPerson = 0;
      }
    }catch(error){
      console.log(error);
    }
  }

  public setPorcentage (value : string){
    try {
      this.tipPorcentage = parseFloat(value);
      this.calculate2();
    } catch (error) {
      console.log(error);      
    }
  }

  public reset(){
    this.bill = 0.0;
    this.tipPorcentage = 0;
    this.numberPerson = 0;
    this.TipPerson = 0.00;
    this.totalPerson = 0.00;
  }
  ngOnInit(): void {
  }
  
}
