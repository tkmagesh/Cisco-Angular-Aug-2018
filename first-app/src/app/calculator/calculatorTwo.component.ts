import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';


@Component({
	selector : 'app-calculator-2',
	templateUrl : './calculatorTwo.component.html',
	styleUrls : ['./calculatorTwo.component.css']
})
export class CalculatorTwoComponent{
	
	model : CalculatorModel = new CalculatorModel();


}