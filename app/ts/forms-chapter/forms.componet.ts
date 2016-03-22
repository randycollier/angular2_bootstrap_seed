import {Component} from 'angular2/core';


import {DemoFormSku} from  './demo_form_sku';
import {DemoFormSkuBuilder} from  './demo_form_sku_with_builder';
import {DemoFormWithValidationsShorthand} from  './demo_form_with_validations_shorthand';
import {DemoFormWithValidationsExplicit} from  './demo_form_with_validations_explicit';
import {DemoFormWithCustomValidations} from   './demo_form_with_custom_validations';
import {DemoFormWithEvents} from   './demo_form_with_events';
import {DemoFormNgModel} from  './demo_form_ng_model';

import {FormsTest} from './forms-test';
@Component({
	selector:'forms-chapter',
	host:{
		class:'formChapter',
	},
	templateUrl: 'app/templates/forms-chapter/forms.component.html',
	directives: [DemoFormSku,
               DemoFormSkuBuilder,
               DemoFormWithValidationsShorthand,
               DemoFormWithValidationsExplicit,
               DemoFormWithCustomValidations,
               DemoFormWithEvents,
               DemoFormNgModel,
               FormsTest],
	
})

export class FormsComponent {
	constructor(){

	}
	let 
}