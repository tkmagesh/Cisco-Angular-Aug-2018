import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
	(item1 : any, item2 : any) : number
}

@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{

	private getComparerFor(attrName) : Comparer {
		return function(item1, item2) : number {
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}

	private getDescendingComparerFor(comparer : Comparer) : Comparer{
		return function(item1, item2) : number {
			return comparer(item1, item2) * -1;
		}
	}
	transform(data : any[], attrName : string, isDescending : boolean = false) : any[]{
		console.log('sort pipe triggered');
		if (!data.length || !attrName) return data;
		let comparer = this.getComparerFor(attrName);
		if (isDescending)
			comparer = this.getDescendingComparerFor(comparer);
		return data.sort(comparer);
	}
}