System.register(['angular2/core', './champion-infobar.component'], function(exports_1, context_1) {
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
    var core_1, champion_infobar_component_1;
    var ChampionHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (champion_infobar_component_1_1) {
                champion_infobar_component_1 = champion_infobar_component_1_1;
            }],
        execute: function() {
            ChampionHeaderComponent = (function () {
                function ChampionHeaderComponent() {
                }
                ChampionHeaderComponent.prototype.ngOnChanges = function () {
                    this.attackSpeed =
                        (0.625 / (1 + this.champion.stats.attackspeedoffset))
                            .toFixed(3);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ChampionHeaderComponent.prototype, "champion", void 0);
                ChampionHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'champion-header',
                        templateUrl: '/app/champions/champion-header.component.html',
                        directives: [champion_infobar_component_1.ChampionInfobarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChampionHeaderComponent);
                return ChampionHeaderComponent;
            }());
            exports_1("ChampionHeaderComponent", ChampionHeaderComponent);
        }
    }
});
//# sourceMappingURL=champion-header.component.js.map