import {Component, Input} from 'angular2/core';

@Component({
    selector: 'champion-infobar',
    template: `
        <div class="progress">
            <div 
                class="progress-bar progress-bar-{{color}}" 
                role="progressbar" 
                style="width: {{size * 10}}%">
            </div>
        </div>
    `
})
export class ChampionInfobarComponent{ 
    @Input() size = 3;
    @Input() color = "priamry";
}