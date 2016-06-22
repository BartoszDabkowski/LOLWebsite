System.register(['angular2/core', 'angular2/router', '../riot.service', '../constants'], function(exports_1, context_1) {
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
    var core_1, router_1, riot_service_1, constants_1;
    var ChampionIconComponent;
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
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            ChampionIconComponent = (function () {
                function ChampionIconComponent(constants) {
                    this.constants = constants;
                }
                ChampionIconComponent.prototype.ngOnChanges = function () {
                    this.url = "http://ddragon.leagueoflegends.com/cdn/" +
                        this.constants.PATCH + "/img/champion/" + this.image;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ChampionIconComponent.prototype, "championId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ChampionIconComponent.prototype, "image", void 0);
                ChampionIconComponent = __decorate([
                    core_1.Component({
                        selector: 'champion-icon',
                        template: "\n    <div>\n        <img class = \"champion-icon\"\n            src={{url}}>\n        <center><a [routerLink]=\"['Champion', {id: championId}]\">{{championId}}</a></center>\n    </div>\n    ",
                        providers: [riot_service_1.RiotService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [constants_1.Constants])
                ], ChampionIconComponent);
                return ChampionIconComponent;
            }());
            exports_1("ChampionIconComponent", ChampionIconComponent);
        }
    }
});
//# sourceMappingURL=champion-icon.component.js.map