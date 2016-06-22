import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RiotService} from '../riot.service';

@Component({
    selector: 'items',
    templateUrl: '/app/items/items.component.html',
    providers: [RiotService],
    directives: [ROUTER_DIRECTIVES]
})
export class ItemsComponent implements OnInit{ 
    items = new Array();
    finishedLoading = false;
    
    constructor(private _riotService : RiotService){   
    }
    
    ngOnInit(){
        this._riotService.getItems()
            .subscribe(items => {
                for(var item in items){
                    this.items.push(items[item]);
                    this.finishedLoading = true;
                }
            });
    }
}