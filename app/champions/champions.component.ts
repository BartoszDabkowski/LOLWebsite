import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RiotService} from '../riot.service'
import {ChampionIconComponent} from './champion-icon.component'

@Component({
    selector: 'champions',
    templateUrl: '/app/champions/champions.component.html',
    providers: [RiotService],
    directives: [ROUTER_DIRECTIVES, ChampionIconComponent]
})
export class ChampionsComponent implements OnInit{ 
    champions = new Array();
    finishedLoading = false;
    
    constructor(private _riotService : RiotService){   
    }
    
    ngOnInit(){
        this._riotService.getChampions()
            .subscribe(champions => {
                for(var champ in champions){
                    this.champions.push(champions[champ]);
                    this.finishedLoading = true;
                }
            });
    }
}