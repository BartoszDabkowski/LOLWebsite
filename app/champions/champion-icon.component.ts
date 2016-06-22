import {Component, Input, OnChanges} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {RiotService} from '../riot.service';
import {Constants} from '../constants';

@Component({
    selector: 'champion-icon',
    template: `
    <div>
        <img class = "champion-icon"
            src={{url}}>
        <center><a [routerLink]="['Champion', {id: championId}]">{{championId}}</a></center>
    </div>
    `,
    providers: [RiotService],
    directives: [ROUTER_DIRECTIVES]
})
export class ChampionIconComponent implements OnChanges{ 
    @Input() championId;
    @Input() image;
    url;
    
    constructor(private constants : Constants){
    }
    ngOnChanges(){
        this.url = "http://ddragon.leagueoflegends.com/cdn/" + 
            this.constants.PATCH + "/img/champion/" + this.image;
    }
}