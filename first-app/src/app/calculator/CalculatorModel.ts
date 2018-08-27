export class CalculatorModel{
	result : number = 0;
	n1 : number = 0;
	n2 : number = 0;

	add(){
		this.result = this.n1 + this.n2;
	}

	subtract(){
		this.result = this.n1 - this.n2;
	}

	multiply(){
		this.result = this.n1 * this.n2;
	}

	divide(){
		this.result = this.n1 / this.n2;
	}
}