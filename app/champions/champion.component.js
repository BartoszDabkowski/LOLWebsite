System.register(['angular2/core', 'angular2/router', '../riot.service', './champion-header.component', './ability-tab.component'], function(exports_1, context_1) {
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
    var core_1, router_1, riot_service_1, champion_header_component_1, ability_tab_component_1;
    var ChampionComponent;
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
            function (champion_header_component_1_1) {
                champion_header_component_1 = champion_header_component_1_1;
            },
            function (ability_tab_component_1_1) {
                ability_tab_component_1 = ability_tab_component_1_1;
            }],
        execute: function() {
            ChampionComponent = (function () {
                function ChampionComponent(_riotService, _routeParams) {
                    this._riotService = _riotService;
                    this._routeParams = _routeParams;
                    this.finishedLoading = false;
                }
                ChampionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this._riotService.getChampions(id)
                        .subscribe(function (champion) {
                        _this.champion = champion[id];
                        _this.finishedLoading = true;
                    });
                };
                ChampionComponent = __decorate([
                    core_1.Component({
                        selector: 'champion',
                        templateUrl: '/app/champions/champion.component.html',
                        providers: [riot_service_1.RiotService],
                        directives: [router_1.ROUTER_DIRECTIVES, champion_header_component_1.ChampionHeaderComponent, ability_tab_component_1.AbilityTabComponent]
                    }), 
                    __metadata('design:paramtypes', [riot_service_1.RiotService, router_1.RouteParams])
                ], ChampionComponent);
                return ChampionComponent;
            }());
            exports_1("ChampionComponent", ChampionComponent);
        }
    }
});
//# sourceMappingURL=champion.component.js.map