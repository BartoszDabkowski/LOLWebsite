import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {RiotService} from '../riot.service'
import {ChampionHeaderComponent} from './champion-header.component'
import {AbilityTabComponent} from './ability-tab.component'


@Component({
    selector: 'champion',
    templateUrl: '/app/champions/champion.component.html',
    providers: [RiotService],
    directives: [ROUTER_DIRECTIVES, ChampionHeaderComponent, AbilityTabComponent]
})
export class ChampionComponent implements OnInit{ 
    champion;
    finishedLoading = false;
    
    constructor(
        private _riotService : RiotService,
        private _routeParams : RouteParams){   
    }
    
    ngOnInit(){
        var id = this._routeParams.get("id")
        
        this._riotService.getChampions(id)
            .subscribe(champion => {
                this.champion = champion[id];
               this.finishedLoading = true;
            });
    }
}