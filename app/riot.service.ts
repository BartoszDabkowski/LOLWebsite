import {Injectable} from 'angular2/core';
import {Http, JSONP_PROVIDERS, Jsonp} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RiotService {
    region = "en_US";
    patch = "6.7.1";
	private _url = "http://ddragon.leagueoflegends.com/cdn/6.7.1/data/en_US/champion";

	constructor(private _http: Http) {
	}

	getChampions(filter?) {
        var url = this._url;
        if (filter)
            url += "/" + filter;
		url += ".json";
		console.log(url);
		return this._http.request(url)
			.map(res => res.json()["data"]);
	}
}
