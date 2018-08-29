import axios from 'axios';

import { Bug } from '../models/Bug';

export class BugApiService{

	private serviceUrl = 'http://localhost:3000/bugs';

	getAll(): Promise<Bug[]>{

		/*var p = axios.get('http://localhost:3000/bugs');
		var p2 = p.then(function(response){
			return response.data;
		});
		return p2;*/

		return axios
			.get(this.serviceUrl)
			.then(response => response.data)
	}
	save(bugData) : Promise<Bug>{
		if (bugData.id === 0){
			return axios
				.post(this.serviceUrl, bugData)
				.then(response => response.data);
		} else {
			return axios
				.put(`${this.serviceUrl}/${bugData.id}`, bugData)
				.then(response => response.data);
		}
	}
	remove(bugData) : Promise<any>{
		return axios
				.delete(`${this.serviceUrl}/${bugData.id}`)
				.then(response => response.data);
	}
}