import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	sortBy : string = 'name';
	sortDesc : boolean = false;
	
	constructor(){
		this.bugs.push({name : 'Server communication failre', isClosed : false});
		this.bugs.push({name : 'User actions not recognised', isClosed : true});
		this.bugs.push({name : 'Application not responding', isClosed : false});
		this.bugs.push({name : 'Data integrity checks failed', isClosed : false});
	}

	onAddNewClick(newBugName : string){
		let newBug : Bug = {
			name : newBugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugNameClick(bug : Bug){
		bug.isClosed = !bug.isClosed;
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce((result, bug)=> bug.isClosed ? ++result : result, 0);
	}
}