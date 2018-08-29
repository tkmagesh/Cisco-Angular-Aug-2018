import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : './bugTracker.component.html',
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	sortBy : string = 'name';
	sortDesc : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugs = this.bugOperations.getAll();
	}

	onAddNewClick(newBugName : string){
		let newBug = this.bugOperations.createNew(newBugName);
		this.bugs.push(newBug);
	}

	onBugNameClick(bug : Bug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		this
			.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	/* convert the following to a 'closedCountPipe' */
	getClosedCount(){
		return this.bugs.reduce((result, bug)=> bug.isClosed ? ++result : result, 0);
	}
}