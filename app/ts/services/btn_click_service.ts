import {Injectable, bind} from 'angular2/core';
import {Subject, Observable, BehaviorSubject} from 'rxjs/Rx';
import {Click} from '../models/models';

@Injectable()

export class BtnClickService {

	currentClick: Subject<Click> = new BehaviorSubject<Click>(null);


	public setCurrentClick(clickMsg: Click): void {
		
		this.currentClick.next(clickMsg);
	}


}


//I suspect this is a hack to get this injectable 
export var btnClickServiceInjectable: Array<any> = [
	bind(BtnClickService).toClass(BtnClickService)
];




