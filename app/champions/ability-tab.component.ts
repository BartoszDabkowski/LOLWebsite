import {Component, Input, OnChanges} from 'angular2/core';
import {AbilityParser} from '../abilityParser'

@Component({
    selector: 'ability-tab',
    templateUrl: '/app/champions/ability-tab.component.html'
})
export class AbilityTabComponent{ 
    @Input() ability;
    
    ngOnChanges(){
        var abilityParser = new AbilityParser(this.ability);
        this.ability.tooltip = abilityParser.parse();
    }
}