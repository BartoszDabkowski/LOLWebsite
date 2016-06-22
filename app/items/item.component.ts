import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {RiotService} from '../riot.service'


@Component({
    selector: 'champion',
    templateUrl: '/app/items/item.component.html',
    providers: [RiotService],
    directives: [ROUTER_DIRECTIVES]
})
export class ItemComponent implements OnInit{ 
    item;
    finishedLoading = false;
    
    constructor(
        private _riotService : RiotService,
        private _routeParams : RouteParams){   
    }
    
    ngOnInit(){
        var id = this._routeParams.get("id")
        
        this._riotService.getChampions(id)
            .subscribe(item => {
                this.item = item[id];
               this.finishedLoading = true;
            });
    }
}