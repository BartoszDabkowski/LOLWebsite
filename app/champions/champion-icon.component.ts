import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {RiotService} from '../riot.service'

@Component({
    selector: 'champion-icon',
    template: `
    <div>
        <img class = "champion-icon"
            src="http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/{{champion.image.full}}">
        <center><a [routerLink]="['Champion', {id: champion.id}]">{{champion.id}}</a></center>
    </div>
    `,
    providers: [RiotService],
    directives: [ROUTER_DIRECTIVES]
})
export class ChampionIconComponent{ 
    @Input() champion;
}