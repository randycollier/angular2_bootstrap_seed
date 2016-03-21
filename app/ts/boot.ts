import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';


import {servicesInjectables } from './services/services';
import {utilInjectables} from './util/util';


// Add all operators to Observable
import 'rxjs/Rx';

bootstrap(AppComponent,[ROUTER_PROVIDERS, servicesInjectables, utilInjectables]);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/