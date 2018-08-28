import { Component, Input } from '@angular/core';

@Component({
	selector : 'app-calculator-result',
	template : `
		<div class="result" [ngClass]="{positive : data >=0, negative : data < 0}">{{data | currency:'INR'}}</div>
	`,
	styleUrls : ['./calculatorResult.component.css']
})
export class CalculatorResultComponent{

	@Input()
	data : number = 0;

}