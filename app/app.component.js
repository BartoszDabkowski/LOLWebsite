System.register(['angular2/core', 'angular2/router', './champions/champions.component', './champions/champion.component', './items/items.component', './items/item.component', './navbar.component'], function(exports_1, context_1) {
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
    var core_1, router_1, champions_component_1, champion_component_1, items_component_1, item_component_1, navbar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (champions_component_1_1) {
                champions_component_1 = champions_component_1_1;
            },
            function (champion_component_1_1) {
                champion_component_1 = champion_component_1_1;
            },
            function (items_component_1_1) {
                items_component_1 = items_component_1_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/champions', name: 'Champions', component: champions_component_1.ChampionsComponent },
                        { path: '/champion/:id', name: 'Champion', component: champion_component_1.ChampionComponent },
                        { path: '/items', name: 'Items', component: items_component_1.ItemsComponent },
                        { path: '/item/:id', name: 'Item', component: item_component_1.ItemComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Champions'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <navbar></navbar>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map