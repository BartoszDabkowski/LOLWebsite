import {Component, Input, OnChanges} from 'angular2/core';
import {AbilityParser} from '../abilityParser'

@Component({
    selector: 'ability-tab',
    templateUrl: '/app/champions/ability-tab.component.html'
})
export class AbilityTabComponent{ 
    @Input() ability;
    @Input() championId;
    @Input() abilityId;
    videoUrl;
    finishedLoading = false;
    
    ngOnChanges(){
        var abilityParser = new AbilityParser(this.ability);
        this.ability.tooltip = abilityParser.parse();
        this.championId = this.champKey();
        
        this.videoUrl = "http://cdn.leagueoflegends.com/champion-abilities/videos/mp4/" 
            + this.championId + "_0" 
            + this.abilityId + ".mp4";
        
        this.finishedLoading = true;
    }
    
    champKey(){
        var champKey = '0'.repeat((4 - this.championId.length)) + this.championId;
        console.log(champKey);
        return champKey;
    }
}