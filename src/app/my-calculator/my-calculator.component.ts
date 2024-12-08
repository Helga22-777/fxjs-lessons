import { Component } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  standalone: false, 
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {
   public title: string  = "Calculator"

   public first: number = 1
   public second: number = 1
   public operation: string = '+'
   public operations: string[] = ['+', '-', '*', '/'];
   public result?: number
   calc() {
    switch(this.operation) {
     case "+":
      this.result = this.first + this.second;
      break;
     case "-":
      this.result = this.first - this.second;
      break;
     case "*":
      this.result = this.first * this.second;
      break;
     case "/":
      this.result = this.first / this.second;
      break;
    }
   }
}
