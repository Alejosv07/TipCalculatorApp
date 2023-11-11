import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'calculator-main',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class Calculatorcomponent implements OnInit {
  
  
  bill: FormControl = new FormControl("", [Validators.required, Validators.minLength(1)]);
  tipPorcentage: FormControl = new FormControl("", [Validators.required, Validators.minLength(1)]);
  numberPerson: FormControl = new FormControl("", [Validators.required, Validators.minLength(1)]);
  TipPerson : number = 0.0;
  totalPerson : number = 0.00;

  public calculate() {
    try{
      this.TipPerson = parseFloat(Number((this.bill.value *this.tipPorcentage.value)/this.numberPerson.value).toFixed(2));//Mostrar error con rojo/numero de personas requerido y procentaje
      this.totalPerson = parseFloat(Number((this.bill.value/this.numberPerson.value)).toFixed(2));//Validate number of person

      if(!Number.isFinite(this.TipPerson)){
        this.TipPerson = 0;
      }
      if(!Number.isFinite(this.totalPerson)){
        this.totalPerson = 0;
      }
    }catch(error){
      console.log(error);
    }
  }
  
  public setPorcentage (value : string){
    try {
      this.tipPorcentage.setValue(parseFloat(value));
      this.calculate();
    } catch (error) {
      console.log(error);      
    }
  }

  public reset(){
    this.bill.reset();
    this.tipPorcentage.reset();
    this.numberPerson.reset();
    this.TipPerson = 0.00;
    this.totalPerson = 0.00;
  }
  ngOnInit(): void {
  }
  
}
