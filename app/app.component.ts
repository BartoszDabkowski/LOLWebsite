import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ChampionsComponent} from './champions/champions.component';
import {ChampionComponent} from './champions/champion.component';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    {path: '/champions', name: 'Champions', component: ChampionsComponent},
    {path: '/champion/:id', name: 'Champion', component: ChampionComponent},
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