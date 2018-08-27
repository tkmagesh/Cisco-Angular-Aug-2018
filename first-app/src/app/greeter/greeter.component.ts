import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : './greeter.component.html',
	styleUrls : ['./greeter.component.css']
})
export class GreeterComponent{

	greetMessage : string = '[Default dummy greet message]';

	onGreetClick(){
		this.greetMessage = '[A new greet message is going to be display here';
	}

}