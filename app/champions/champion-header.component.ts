import {Component, Input} from 'angular2/core';
import {ChampionInfobarComponent} from './champion-infobar.component'

@Component({
    selector: 'champion-header',
    templateUrl: '/app/champions/champion-header.component.html',
    directives: [ChampionInfobarComponent]
})
export class ChampionHeaderComponent{ 
    @Input() champion;
}