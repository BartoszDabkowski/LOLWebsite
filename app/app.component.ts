import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ChampionsComponent} from './champions/champions.component';
import {ChampionComponent} from './champions/champion.component';
import {ItemsComponent} from './items/items.component';
import {ItemComponent} from './items/item.component';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home.component';

@RouteConfig([
    {path: '/champions', name: 'Champions', component: ChampionsComponent},
    {path: '/champion/:id', name: 'Champion', component: ChampionComponent},
    {path: '/items', name: 'Items', component: ItemsComponent},
    {path: '/item/:id', name: 'Item', component: ItemComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Champions']}
])
@Component({
    selector: 'my-app',
    template: 
    `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})

export class AppComponent{ 
}