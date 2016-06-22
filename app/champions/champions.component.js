System.register(['angular2/core', 'angular2/router', '../riot.service', './champion-icon.component'], function(exports_1, context_1) {
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
    var core_1, router_1, riot_service_1, champion_icon_component_1;
    var ChampionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (riot_service_1_1) {
                riot_service_1 = riot_service_1_1;
            },
            function (champion_icon_component_1_1) {
                champion_icon_component_1 = champion_icon_component_1_1;
            }],
        execute: function() {
            ChampionsComponent = (function () {
                function ChampionsComponent(_riotService) {
                    this._riotService = _riotService;
                    this.champions = new Array();
                    this.finishedLoading = false;
                }
                ChampionsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._riotService.getChampions()
                        .subscribe(function (champions) {
                        for (var champ in champions) {
                            _this.champions.push(champions[champ]);
                            _this.finishedLoading = true;
                        }
                    });
                };
                ChampionsComponent = __decorate([
                    core_1.Component({
                        selector: 'champions',
                        templateUrl: '/app/champions/champions.component.html',
                        providers: [riot_service_1.RiotService],
                        directives: [router_1.ROUTER_DIRECTIVES, champion_icon_component_1.ChampionIconComponent]
                    }), 
                    __metadata('design:paramtypes', [riot_service_1.RiotService])
                ], ChampionsComponent);
                return ChampionsComponent;
            }());
            exports_1("ChampionsComponent", ChampionsComponent);
        }
    }
});
//# sourceMappingURL=champions.component.js.map