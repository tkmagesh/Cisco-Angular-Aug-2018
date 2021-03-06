import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Bug } from '../models/Bug';
import { Observable } from 'rxjs';

@Injectable()
export class BugApiService{

	private serviceUrl = 'http://localhost:3000/bugs';

	constructor(private httpClient : HttpClient){

	}
	getAll(): Observable<Bug[]>{

		/*var p = axios.get('http://localhost:3000/bugs');
		var p2 = p.then(function(response){
			return response.data;
		});
		return p2;*/

		return this.httpClient
			.get<Bug[]>(this.serviceUrl);
	}

	save(bugData) : Observable<Bug>{
		if (bugData.id === 0){
			return this
				.httpClient
				.post<Bug>(this.serviceUrl, bugData);
		} else {
			return this
				.httpClient
				.put<Bug>(`${this.serviceUrl}/${bugData.id}`, bugData);
		}
	}
	
	remove(bugData) : Observable<any>{
		return this
			.httpClient
				.delete<any>(`${this.serviceUrl}/${bugData.id}`);
	}
}