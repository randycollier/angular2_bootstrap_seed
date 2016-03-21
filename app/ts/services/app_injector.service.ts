import {Injector} from 'angular2/core';

let appInjectorRef: Injector;
export const appInjector = (injector?: Injector):Injector => {
	console.log('what is this')
	if (injector) {
	  appInjectorRef = injector;
	}

	return appInjectorRef;
};

