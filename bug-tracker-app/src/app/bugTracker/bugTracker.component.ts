import { Component } from '@angular/core';

interface Bug{
	name : string,
	isClosed : boolean
};

@Component({
	selector : 'app-bug-tracker',
	templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	onAddNewClick(newBugName : string){
		let newBug : Bug = {
			name : newBugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}
}