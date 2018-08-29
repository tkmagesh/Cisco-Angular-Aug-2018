import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug';

@Pipe({
	name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
	transform(value: Bug[], args: any[]): number {
		console.log('closedCountPipe.transform triggered');
		return value.reduce((result, bug) => bug.isClosed ? ++result : result, 0);		
	}
}