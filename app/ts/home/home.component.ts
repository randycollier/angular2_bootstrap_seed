import {Component} from 'angular2/core';

@Component({
	selector: 'home',
	templateUrl: 'app/templates/home.component.html'

})

export class HomeComponent {
	title: string;
	constructor(){

		this.title='It is ?? ';
	}
}

