import { Bug } from '../models/Bug';

export class BugStorageService{

	private currentBugId = 0;
	private storage = window.localStorage;

	getAll() : Bug[] {
		let result : Bug[] = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);

			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}
	save(bugData : Bug) : void {
		if (bugData.id === 0)
			bugData.id = ++this.currentBugId;
		this.storage.setItem(bugData.id.toString(), JSON.stringify(bugData));
	}
	remove(bugData : Bug) : void{
		this.storage.removeItem(bugData.id.toString());
	}
}