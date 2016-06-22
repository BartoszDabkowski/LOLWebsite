import {Component, Input, OnChanges} from 'angular2/core';
import {ChampionInfobarComponent} from './champion-infobar.component'

@Component({
    selector: 'champion-header',
    templateUrl: '/app/champions/champion-header.component.html',
    directives: [ChampionInfobarComponent]
})
export class ChampionHeaderComponent implements OnChanges{ 
    @Input() champion;
    attackSpeed;
    
    ngOnChanges(){
        this.attackSpeed = 
            (0.625 / (1 + this.champion.stats.attackspeedoffset))
            .toFixed(3);
    }
}