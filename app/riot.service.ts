import {Injectable} from 'angular2/core';
import {Http, JSONP_PROVIDERS, Jsonp} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Constants} from './constants';

@Injectable()
export class RiotService {
	private _url = 
		"http://ddragon.leagueoflegends.com/cdn/" 
		+ this.constants.PATCH + "/data/" + this.constants.REGION;

	constructor(private constants: Constants, private _http: Http) {
	}

	getChampions(filter?) {
        var url = this._url + "/champion";
        if (filter)
            url += "/" + filter;
		url += ".json";
		console.log(url);
		return this._http.request(url)
			.map(res => res.json()["data"]);
	}
	
	getItems(filter?) {
        var url = this._url + "/item";
        if (filter)
            url += "/" + filter;
		url += ".json";
		console.log(url);
		return this._http.request(url)
			.map(res => res.json()["data"]);
	}
}
