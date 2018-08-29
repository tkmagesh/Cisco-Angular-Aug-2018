import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';


@Injectable()
export class BugOperationsService{

	constructor(private storage : BugStorageService){

	}
	createNew(bugName : string) : Bug {
		let newBug : Bug = {
			id : 0,
			name : bugName,
			isClosed : false
		};
		this.storage.save(newBug);
		return newBug;
	}

	toggle(bugToToggle: Bug): void{
		bugToToggle.isClosed = !bugToToggle.isClosed;
		this.storage.save(bugToToggle);
	}

	remove(bug : Bug){
		this.storage.remove(bug);
	}

	getAll(){
		return this.storage.getAll();
	}
}