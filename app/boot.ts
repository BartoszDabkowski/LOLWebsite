import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS, JSONP_PROVIDERS, Jsonp} from 'angular2/http';
import {Constants} from './constants';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [Constants, ROUTER_PROVIDERS, JSONP_PROVIDERS, HTTP_PROVIDERS]);