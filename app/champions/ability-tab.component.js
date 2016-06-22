System.register(['angular2/core', '../abilityParser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, abilityParser_1;
    var AbilityTabComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (abilityParser_1_1) {
                abilityParser_1 = abilityParser_1_1;
            }],
        execute: function() {
            AbilityTabComponent = (function () {
                function AbilityTabComponent() {
                    this.finishedLoading = false;
                }
                AbilityTabComponent.prototype.ngOnChanges = function () {
                    var abilityParser = new abilityParser_1.AbilityParser(this.ability);
                    this.ability.tooltip = abilityParser.parse();
                    this.championId = this.champKey();
                    this.videoUrl = "http://cdn.leagueoflegends.com/champion-abilities/videos/mp4/"
                        + this.championId + "_0"
                        + this.abilityId + ".mp4";
                    this.finishedLoading = true;
                };
                AbilityTabComponent.prototype.champKey = function () {
                    var champKey = '0'.repeat((4 - this.championId.length)) + this.championId;
                    console.log(champKey);
                    return champKey;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AbilityTabComponent.prototype, "ability", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AbilityTabComponent.prototype, "championId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AbilityTabComponent.prototype, "abilityId", void 0);
                AbilityTabComponent = __decorate([
                    core_1.Component({
                        selector: 'ability-tab',
                        templateUrl: '/app/champions/ability-tab.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AbilityTabComponent);
                return AbilityTabComponent;
            }());
            exports_1("AbilityTabComponent", AbilityTabComponent);
        }
    }
});
//# sourceMappingURL=ability-tab.component.js.map